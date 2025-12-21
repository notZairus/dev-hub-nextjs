"use client";

import Link from "next/link";
import posthog from "posthog-js";

export default function Navigation() {
  const handleNavClick = (destination: string) => {
    posthog.capture(`navigation_${destination}_clicked`, {
      destination: destination,
      source: "header_nav",
    });
  };

  return (
    <nav>
      <ul>
        <Link href="/" onClick={() => handleNavClick("home")}>
          Home
        </Link>
        <Link href="/events" onClick={() => handleNavClick("events")}>
          Events
        </Link>
        <Link href="/about" onClick={() => handleNavClick("about")}>
          About
        </Link>
      </ul>
    </nav>
  );
}
