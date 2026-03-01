import type { Metadata } from "next";
import { Space_Grotesk, Outfit } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const outfit = Outfit({ 
  subsets: ["latin"],
  variable: "--font-outfit",
});

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
      <body className={`${spaceGrotesk.variable} ${outfit.variable}`}>
        {children}
      </body>
    </html>
  );
}
