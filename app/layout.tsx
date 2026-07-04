import type { Metadata } from "next";
import "./globals.css";
import "./immersive.css";
import "./cinematic.css";
import "./laptop-hero.css";
import "./editorial.css";
import "./content-upgrade.css";

export const metadata: Metadata = {
  title: "Carter Digitals | Premium Websites, Apps & Growth Systems",
  description:
    "Carter Digitals is a founder-led Pretoria digital studio by Kabelo Kadiaka. We build premium websites, web applications, lead experiences and practical growth systems for ambitious businesses.",
  keywords: [
    "Carter Digitals",
    "Kabelo Kadiaka",
    "Pretoria web design",
    "Gauteng website development",
    "web applications South Africa",
    "business systems",
    "digital growth studio",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
