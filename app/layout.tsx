import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zilong Zheng — Robotics & Embodied AI",
  description: "Robotics engineer working on world models, multimodal perception, planning and Sim2Real systems.",
  authors: [{ name: "Zilong Zheng" }],
  openGraph: {
    title: "Zilong Zheng — Robotics & Embodied AI",
    description: "World models, multimodal perception, motion planning and Sim2Real robotics.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Zilong Zheng — Robotics & Embodied AI",
    description: "World models, multimodal perception, motion planning and Sim2Real robotics.",
  },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
