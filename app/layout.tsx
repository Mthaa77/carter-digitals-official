import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Carter Digitals | The Digital Proof Engine",
  description:
    "Premium websites, web applications and digital growth systems for ambitious businesses.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
