import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carter Digitals | Built Different. Built African. Built to Win.",
  description: "Carter Digitals is a Pretoria digital studio building premium websites, bespoke web applications, business tools and AI-enabled growth systems.",
  keywords: ["Carter Digitals", "Pretoria web design", "South African web applications", "business automation", "digital studio", "Kabelo Kadiaka"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
