import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.scss";
import { TooltipProvider } from "@lyttle/ui";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Lyttle User Interface",
    template: "%s | Lyttle User Interface",
  },
  description:
    "A complete user interface system styled with the Lyttle Development brand palette — accessible, polished, and production-ready.",
  keywords: ["design system", "component library", "lyttle", "accessible"],
  authors: [{ name: "Lyttle Development" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        {/* Skip-to-main for screen readers & keyboard users */}
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <TooltipProvider>{children}</TooltipProvider>
      </body>
    </html>
  );
}