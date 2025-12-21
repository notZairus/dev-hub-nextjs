"use client";

import Image from "next/image";
import Link from "next/link";
import posthog from "posthog-js";

const ExploreBtn = () => {
  const handleExploreClick = () => {
    posthog.capture("explore_events_clicked", {
      button_id: "explore-btn",
      destination: "#events",
    });
  };

  return (
    <>
      <button
        id="explore-btn"
        className="transition"
        onClick={handleExploreClick}
      >
        <Link href="#events">
          <p>Explore Events</p>
          <div>
            <Image
              src="/icons/arrow-down.svg"
              alt="Arrow Down Icon"
              width={24}
              height={24}
            />
          </div>
        </Link>
      </button>
    </>
  );
};

export default ExploreBtn;
