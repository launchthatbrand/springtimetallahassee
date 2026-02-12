import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Transportation Day 2026",
    template: "%s | Target Zero",
  },
  description:
    "Transportation Day 2026",
  applicationName: "Transportation Day 2026",
  icons: [{ rel: "icon", url: "/Web Assets/FDOT Logo_K.png" }],
  openGraph: {
    title: "Transportation Day 2026",
    description: "Transportation Day 2026",
    images: [
      {
        url: "/TZ%20Transportation%20Day.jpg",
        alt: "Transportation Day 2026",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Transportation Day 2026",
    description: "Transportation Day 2026",
    images: ["/TZ%20Transportation%20Day.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">
        {children}

      </body>
    </html>
  );
}
