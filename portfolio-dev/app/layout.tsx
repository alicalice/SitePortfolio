import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Alice Santos",
  description: "Meu portfólio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-br"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="
        min-h-full flex flex-col
        bg-linear-to-br from-[#0f0f14] via-[#151521] to-[#0f0f14]
        text-zinc-200
        font-sans
        relative">

          <div className="pointer-events-none absolute top-40 right-20 w-72 h-72 bg-purple-600/20 blur-[120px] rounded-full"></div>

          <Navbar />
          <main className="flex-1">
            {children}
          </main>

        </body>
    </html>
  );
}