import "~/styles/globals.css";

import { type Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Springtime Tallahassee",
    template: "%s | Springtime Tallahassee",
  },
  description:
    "Springtime Tallahassee",
  applicationName: "Springtime Tallahassee",
  icons: [{ rel: "icon", url: "/Web Assets/FDOT Logo_K.png" }],
  openGraph: {
    title: "Springtime Tallahassee",
    description: "Springtime Tallahassee",
    images: [
      {
        url: "/TZ%20Transportation%20Day.jpg",
        alt: "Springtime Tallahassee",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Springtime Tallahassee",
    description: "Springtime Tallahassee",
    images: ["/TZ%20Transportation%20Day.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-MP4Z2ZT2MM"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-MP4Z2ZT2MM');
          `}
        </Script>
        {children}

      </body>
    </html>
  );
}
