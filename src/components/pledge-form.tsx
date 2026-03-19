"use client";

import * as z from "zod";

import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import Link from "next/link";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  participatedInFdotOutreachEvent: z.boolean().default(false),
});

type FormInputValues = z.input<typeof formSchema>;
type FormValues = z.output<typeof formSchema>;

type PledgeFormProps = {
  successRedirectPath?: string;
};

export function PledgeForm({ successRedirectPath }: PledgeFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormInputValues, undefined, FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      participatedInFdotOutreachEvent: false,
    },
  });

  const handleSubmitPledge: SubmitHandler<FormValues> = async (values) => {
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/pledge", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          sourcePath:
            typeof window !== "undefined" ? window.location.pathname : undefined,
        }),
      });

      if (!response.ok) {
        const data = (await response.json().catch(() => null)) as
          | { error?: string }
          | null;
        throw new Error(data?.error ?? "Failed to submit pledge.");
      }

      if (successRedirectPath) {
        router.push(successRedirectPath);
        return;
      }

      setIsSubmitted(true);
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Failed to submit pledge.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center justify-center space-y-6 py-12 text-center animate-in fade-in zoom-in duration-500">
        <div className="h-20 w-20 rounded-full bg-green-100 flex items-center justify-center animate-in zoom-in-50 fade-in duration-700">
          <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div className="space-y-2 animate-in slide-in-from-bottom-2 fade-in duration-700">
          <h3 className="text-3xl font-black text-white uppercase font-oswald tracking-wide">
            Thank you for your commitment!
          </h3>
          <p className="text-xl text-white font-medium max-w-md mx-auto">
            Together we are making Florida&apos;s roadways safer for everyone.
          </p>
          <p className="text-base text-white font-medium max-w-lg mx-auto">
            Signing the safety pledge is just the first step. Go to{" "}
            <Link
              href="https://www.fdot.gov/agencyresources/target-zero"
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
            >
              https://www.fdot.gov/agencyresources/target-zero
            </Link>{" "}
            to learn more on how you can be apart of the Target Zero mission.
          </p>
        </div>
        <Button
          onClick={() => {
            setIsSubmitted(false);
            reset();
          }}
          variant="outline"
          className="mt-4 border-2 border-[#1c3e6f] text-white font-bold hover:bg-[#1c3e6f] hover:text-white"
        >
          Submit Another Pledge
        </Button>

      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6 transition-all duration-300"
      onSubmit={handleSubmit(handleSubmitPledge)}
    >

      <div className="z-10 text-2xl font-bold leading-relaxed text-black md:text-3xl">
        <p className="relative">
          <span>I </span>
          <span className="relative inline-block align-baseline mx-2">
            <Input
              {...register("name")}
              className={`h-9 w-52 rounded-md border-2 bg-white px-3 py-1 text-lg text-[#1c3e6f] placeholder:text-slate-500 shadow-sm transition-colors focus-visible:border-b-[#d32f2f] focus-visible:ring-0 sm:w-64 md:w-72 ${errors.name ? "border-red-500 bg-red-50" : "border-[#1c3e6f]"
                }`}
              placeholder="First and Last Name"
              aria-label="Name"
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <span className="absolute left-0 -bottom-6 text-sm text-red-600 font-bold whitespace-nowrap animate-in slide-in-from-top-1 fade-in">
                * {errors.name.message}
              </span>
            )}
          </span>
          <span>pledge to Target Zero by:</span>
        </p>
      </div>

      <ul className="z-10 space-y-3 pl-4">
        {[
          {
            lead: "Driving with focus every time I get behind the wheel.",
            rest: "I will eliminate distractions, by putting my phone on do not disturb recognizing that drive time is my time, staying alert, and giving my full attention to Florida roadways.",
          },
          {
            lead: "Obeying traffic laws and speeding limits.",
            rest: "I will drive at safe speeds on roadways and make responsible decisions that protect myself and others.",
          },
          {
            lead: "Sharing the road responsibly.",
            rest: "I will protect pedestrians, bicyclists, and motorists, by keeping my distance and embracing the space making sure our roadways are safe.",
          },
          {
            lead: "Never driving under the influence of alcohol or drugs.",
            rest: "I will understand that risk of a serious or fatal crash increases for everyone on the road if I drive impaired.",
          },
          {
            lead: "Planning ahead and allowing enough drive time.",
            rest: "I will avoid rushing, recognizing that speeding to save time will have lifelong consequences.",
          },
        ].map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-3 text-xl text-black md:text-2xl"
          >
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-black" />
            <span>
              <span className="font-bold">{item.lead}</span>{" "}
              <span className="font-normal">{item.rest}</span>
            </span>
          </li>
        ))}
      </ul>

      <div className="z-10 flex items-start rounded-lg border-2 border-dashed border-[#09426e]/40 bg-[#09426e]/5 px-4 py-3">
        <label
          htmlFor="participatedInFdotOutreachEvent"
          className="flex cursor-pointer items-start gap-3 text-black"
        >
          <input
            id="participatedInFdotOutreachEvent"
            type="checkbox"
            {...register("participatedInFdotOutreachEvent")}
            className="mt-1 h-5 w-5 rounded border-2 border-[#09426e] bg-white accent-[#b91c1c]"
            aria-label="I Participated in a Florida Department of Transportation Outreach Event"
          />
          <span className="text-xl md:text-2xl font-bold leading-relaxed">
            I Participated in a Florida Department of Transportation Outreach Event
          </span>
        </label>
      </div>

      <div className="flex z-10 w-full flex-col gap-4 pt-6 sm:flex-row sm:items-center sm:justify-end">
        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="h-10 px-8 mr-0 md:mr-10 text-3xl p-8 font-black uppercase tracking-widest bg-[#b91c1c] hover:bg-[#991b1b] text-white rounded-full shadow-md transition-all hover:-translate-y-0.5 active:translate-y-0 w-full sm:w-auto"
        >
          {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
        </Button>
      </div>
      {submitError && (
        <p className="z-10 text-sm font-bold text-red-600">{submitError}</p>
      )}

    </form>
  );
}
