import { cn } from "@/lib/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Bebas_Neue } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

// Headings
const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas-neue",
});

// Normal text
const avenirNext = localFont({
  src: "avenir-next.woff2",
  display: "swap",
  variable: "--font-avenir-next",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="dark"
    >
      <body className={cn(`${bebasNeue.variable} ${avenirNext.variable}`)}>
        {children}
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
