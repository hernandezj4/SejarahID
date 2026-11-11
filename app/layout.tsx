import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SejarahID — Jejak, Tokoh & Warisan Indonesia",
  description: "Jelajahi linimasa, kisah para tokoh, dan warisan budaya yang membentuk perjalanan Indonesia.",
  keywords: ["sejarah Indonesia", "tokoh sejarah", "linimasa kemerdekaan", "warisan budaya", "arsip digital"],
  authors: [{ name: "SejarahID Team" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
