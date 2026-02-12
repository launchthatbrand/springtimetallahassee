import "~/styles/globals.css";

import { type Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Impaired Driving in Florida",
    template: "%s | Target Zero",
  },
  description:
    "Florida Department of Transportation safety information and resources with a focus on impaired driving prevention.",
  applicationName: "Target Zero",
  icons: [{ rel: "icon", url: "/Web Assets/FDOT Logo_K.png" }],
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
