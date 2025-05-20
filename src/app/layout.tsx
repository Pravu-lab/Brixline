import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import LenisProvider from "@/contexts/LenisProvider";
import Home from "./page";
import { ThankYouProvider } from "@/contexts/ThankYouContext";
import ThankYouPopup from "@/Components/ThankYouPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brixline",
  description: "Built on Trust, Delivered with Excellence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-intertight`}
      >
        <ThankYouProvider>
          <LenisProvider>{children}</LenisProvider>
          <ThankYouPopup />
        </ThankYouProvider>
      </body>
    </html>
  );
}
