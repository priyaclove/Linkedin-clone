import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import RouteGuard from "./components/auth/RouteGuard";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "LinkedIn Clone",
  description: "A LinkedIn clone built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} h-full antialiased`}
      suppressHydrationWarning>
      {/* suppressHydrationWarning: browser extensions (ColorZilla, Grammarly, etc.)
          inject attributes like cz-shortcut-listen onto <body> before React
          hydrates, which otherwise triggers a hydration mismatch warning. */}
      <body
        className={`${roboto.variable} min-h-full flex flex-col`}
        suppressHydrationWarning>
        <RouteGuard>{children}</RouteGuard>
      </body>
    </html>
  );
}
