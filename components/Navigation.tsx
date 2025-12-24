"use client";

import Link from "next/link";

export default function Navigation() {
  return (
    <nav>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
      </ul>
    </nav>
  );
}
