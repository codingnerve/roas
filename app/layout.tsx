import type { Metadata } from "next";
import { Bricolage_Grotesque, Inter } from "next/font/google";
import "./globals.css";
import Preloader from "./components/Preloader";
import CustomCursor from "./components/CustomCursor";
import GsapInitializer from "./components/GsapInitializer";

const bricolage = Bricolage_Grotesque({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "The Roas Haus - Performance Paid Ads Agency",
  description: "We don't run ads. We run returns. We scale paid advertising campaigns on Meta, Google, and TikTok.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-[var(--roas-bg)] text-[var(--roas-black)] selection:bg-[var(--roas-base)] selection:text-black overflow-x-hidden">
        <Preloader />
        <CustomCursor />
        <GsapInitializer />
        {children}
      </body>
    </html>
  );
}
