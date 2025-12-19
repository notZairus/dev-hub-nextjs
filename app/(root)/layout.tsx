import type { Metadata } from "next";
import { Schibsted_Grotesk, Martian_Mono } from "next/font/google";
import "../globals.css";
import LightRays from "@/components/LightRays";
import Image from "next/image";
import Link from "next/link";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
});

const martianMono = Martian_Mono({
  variable: "--font-martian-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dev Hub",
  description: "The event hub every developer needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${schibstedGrotesk.variable} ${martianMono.variable} min-h-screen antialiased `}
      >
        <div className="absolute inset-0 top-0 -z-10 min-h-screen">
          <LightRays
            raysOrigin="top-center-offset"
            raysColor="#00ffff"
            raysSpeed={1.5}
            lightSpread={0.8}
            rayLength={1.2}
            followMouse={true}
            mouseInfluence={0.1}
            noiseAmount={0.1}
            distortion={0.05}
            className="custom-rays"
          />
        </div>

        <header className="w-full flex items-center justify-between px-5 py-4">
          <div>
            <Image
              src="/icons/logo.png"
              alt="Dev Hub Logo"
              width={36}
              height={36}
            ></Image>
          </div>
          <nav>
            <ul>
              <Link href="/">Home</Link>
              <Link href="/events">Events</Link>
              <Link href="/about">About</Link>
            </ul>
          </nav>
        </header>

        <main>{children}</main>
      </body>
    </html>
  );
}
