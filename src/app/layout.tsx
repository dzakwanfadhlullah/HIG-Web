import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://hig-driven.vercel.app"),
  title: {
    default: "HIG Driven — Human-driven interface design for Codex",
    template: "%s — HIG Driven",
  },
  description:
    "Plan, build, refactor, and audit interfaces with a Codex skill distilled from Apple's public design guidance.",
  applicationName: "HIG Driven",
  keywords: [
    "Codex skill",
    "Human Interface Guidelines",
    "UI audit",
    "UX design",
    "accessibility",
    "interface design",
  ],
  authors: [{ name: "Dzakwan Fadhlullah" }],
  creator: "Dzakwan Fadhlullah",
  openGraph: {
    type: "website",
    title: "HIG Driven — Human-driven interface design for Codex",
    description:
      "Guide the work. Build with intent. Audit what matters.",
    siteName: "HIG Driven",
  },
  twitter: {
    card: "summary_large_image",
    title: "HIG Driven — Human-driven interface design for Codex",
    description:
      "Guide the work. Build with intent. Audit what matters.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
