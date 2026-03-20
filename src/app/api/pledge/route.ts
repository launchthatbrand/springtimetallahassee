import { ApiClient, ClientError } from "@mondaydotcomorg/api";
import { NextResponse } from "next/server";
import { env } from "~/env";

type PledgePayload = {
  name?: string;
  zipCode?: string;
  location?: string;
  commitments?: string[];
  sourcePath?: string;
  participatedInFdotOutreachEvent?: boolean;
};

type BoardColumnMap = {
  zipCode?: string;
  submittedDate?: string;
  participatedInFdotOutreachEvent?: string;
  // Future mappings:
  // name?: string;
  // location?: string;
  // commitments?: string;
  // sourcePath?: string;
};

type BoardIntegrationConfig = {
  columns: BoardColumnMap;
};

const DEFAULT_BOARD_CONFIG: BoardIntegrationConfig = {
  columns: {
    zipCode: "text_mm0hpvgv",
    submittedDate: "date4",
    participatedInFdotOutreachEvent: "boolean_mm1kk9a2",
  },
};

// Hardcoded per-board mapping for now.
// As we add more forms/boards, add entries here.
const MONDAY_BOARD_CONFIGS: Record<string, BoardIntegrationConfig> = {
  // "18400076893": {
  //   columns: { zipCode: "text_mm0hpvgv" },
  // },
};

const getBoardConfig = (boardId: string): BoardIntegrationConfig => {
  return (
    MONDAY_BOARD_CONFIGS[boardId] ??
    DEFAULT_BOARD_CONFIG
  );
};

const getString = (value: unknown): string => {
  return typeof value === "string" ? value : "";
};

const isPledgePayload = (value: unknown): value is PledgePayload => {
  if (!value || typeof value !== "object") {
    return false;
  }
  return true;
};

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    if (!isPledgePayload(body)) {
      return NextResponse.json(
        { error: "Invalid pledge payload." },
        { status: 400 },
      );
    }

    const payload: PledgePayload = body;

    const boardIdRaw = getString(env.MONDAY_BOARD).trim();
    const token = getString(env.MONDAY_TOKEN).trim();

    if (!boardIdRaw) {
      return NextResponse.json(
        { error: "MONDAY_BOARD is missing." },
        { status: 500 },
      );
    }

    if (!token) {
      return NextResponse.json(
        { error: "MONDAY_TOKEN is missing." },
        { status: 500 },
      );
    }

    const boardId = Number(boardIdRaw);
    if (!Number.isFinite(boardId) || boardId <= 0) {
      return NextResponse.json(
        { error: "MONDAY_BOARD must be a numeric board id." },
        { status: 500 },
      );
    }

    const trimmedName = payload.name?.trim() ?? "Pledge Submission";
    const trimmedZip = payload.zipCode?.trim();
    const itemName = trimmedZip ? `${trimmedName} - ${trimmedZip}` : trimmedName;

    const boardConfig = getBoardConfig(boardIdRaw);
    const columnValues: Record<
      string,
      string | { date: string } | { checked: "true" | "false" }
    > = {};
    if (boardConfig.columns.zipCode && trimmedZip) {
      columnValues[boardConfig.columns.zipCode] = trimmedZip;
    }
    if (boardConfig.columns.submittedDate) {
      const today = new Date().toISOString().slice(0, 10);
      columnValues[boardConfig.columns.submittedDate] = {
        date: today,
      };
    }
    if (boardConfig.columns.participatedInFdotOutreachEvent) {
      columnValues[boardConfig.columns.participatedInFdotOutreachEvent] = {
        checked: payload.participatedInFdotOutreachEvent ? "true" : "false",
      };
    }
    const columnValuesJson =
      Object.keys(columnValues).length > 0
        ? JSON.stringify(columnValues)
        : undefined;

    const monday = new ApiClient({ token });

    const createItemMutation = `
      mutation CreateItem($boardId: ID!, $itemName: String!, $columnValues: JSON) {
        create_item(board_id: $boardId, item_name: $itemName, column_values: $columnValues) {
          id
        }
      }
    `;

    const createItemResponse = await monday.request<{
      create_item?: { id?: string };
    }>(createItemMutation, {
      boardId: boardIdRaw,
      itemName,
      columnValues: columnValuesJson,
    });

    const itemId = createItemResponse?.create_item?.id;
    if (!itemId) {
      return NextResponse.json(
        { error: "Unable to create Monday item." },
        { status: 500 },
      );
    }

    const details = [
      `Name: ${trimmedName}`,
      `Submitted At: ${new Date().toISOString()}`,
    ].join("\n");

    const createUpdateMutation = `
      mutation AddUpdate($itemId: ID!, $body: String!) {
        create_update(item_id: $itemId, body: $body) {
          id
        }
      }
    `;

    await monday.request<{
      create_update?: { id?: string };
    }>(createUpdateMutation, { itemId, body: details });

    return NextResponse.json({ ok: true, itemId });
  } catch (error) {
    if (error instanceof ClientError) {
      const mondayError =
        error.response?.errors?.[0]?.message ??
        "Monday API request failed.";
      const status = mondayError.includes("Not authenticated") ? 401 : 500;
      return NextResponse.json({ error: mondayError }, { status });
    }
    console.error("Monday pledge submission failed:", error);
    return NextResponse.json(
      { error: "Failed to submit pledge to Monday." },
      { status: 500 },
    );
  }
};
