import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mirza Ali Portfolio",
  description: "Cinematic, professional, and minimal portfolio for Mirza Ali.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} font-inter antialiased bg-background text-foreground transition-colors duration-700 ease-cinematic`}
      >
        {children}
      </body>
    </html>
  );
}
