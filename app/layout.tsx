import "../src/styles/global.css";
import { sourceCodePro } from "../src/styles/fonts";
import { Metadata } from "next";
import type { Viewport } from "next";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: "devfinder",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${sourceCodePro.className} bg-zinc-100 px-6 py-8 text-zinc-800 antialiased md:px-18 xl:px-64 2xl:px-128 dark:bg-slate-900 dark:text-zinc-200`}
      >
        {children}
      </body>
    </html>
  );
}
