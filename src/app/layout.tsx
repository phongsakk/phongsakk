import type { Metadata } from "next";
import { Fraunces, Noto_Sans_Thai, Source_Sans_3 } from "next/font/google";
import "./globals.css";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body-latin",
  display: "swap",
});

const thai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-body-thai",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Phongsak Yodsaodee — Resume",
  description: "Bilingual resume — Backend / Full Stack / System Analyst",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" suppressHydrationWarning>
      <body
        className={`${display.variable} ${body.variable} ${thai.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
