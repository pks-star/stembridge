import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "STEMBridge - AI-Powered STEM Tutoring for Canadian Students",
  description: "Free AI tutor helping Canadian students master Math, Science, and Programming through Socratic learning.",
  keywords: ["STEM", "tutoring", "AI", "Canada", "math", "science", "programming"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
