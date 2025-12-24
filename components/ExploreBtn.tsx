"use client";

import Image from "next/image";
import Link from "next/link";
const ExploreBtn = () => {
  return (
    <>
      <button id="explore-btn" className="transition">
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
