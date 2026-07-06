import type { Metadata } from "next";
import "./globals.css";
import "./ultra-premium.css";
import "./brief-upgrade.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://carterdigitals.co.za"),
  title: "Carter Digitals | Built Different. Built African. Built to Win.",
  description: "Carter Digitals is a Pretoria digital studio building premium websites, bespoke web applications, business tools and AI-enabled growth systems.",
  keywords: ["Carter Digitals", "Pretoria web design", "South African web applications", "business automation", "digital studio", "Kabelo Kadiaka"],
  openGraph: {
    title: "Carter Digitals | Digital infrastructure built to move business forward",
    description: "Premium websites, bespoke web applications, internal business tools and AI-enabled systems for ambitious South African institutions.",
    url: "/",
    siteName: "Carter Digitals",
    locale: "en_ZA",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
