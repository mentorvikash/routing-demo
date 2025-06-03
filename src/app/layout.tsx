import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavBar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: " Next.js Tutorial | Revive Coding",
    template: " %s | Revive Coding",
  },
  description: "Next.js tutorial in hindi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <header
          style={{
            textAlign: "center",
            background: "gray",
            color: "white",
          }}
        >
          <NavBar />
        </header>
        {children}
        <footer
          style={{
            position: "absolute",
            bottom: 0,
            textAlign: "center",
            background: "gray",
            color: "white",
            width: "100vw",
          }}
        >
          <p>Footer Part</p>
        </footer>
      </body>
    </html>
  );
}
