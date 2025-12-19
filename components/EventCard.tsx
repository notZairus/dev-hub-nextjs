import Image from "next/image";
import type { Event } from "../lib/global";
import Link from "next/link";

interface Props {
  event: Event;
}

export default function EventCard({ event }: Props) {
  return (
    <Link href={`/event/${event.id}`}>
      <div>
        <div className="w-full aspect-15/10 relative">
          <Image
            src={event.imageSrc}
            alt={event.name}
            fill
            className="rounded-tl-lg rounded-tr-lg"
          />
        </div>
        <div className="mt-1">
          <div className="flex gap-1 text-[#bdbdbd]">
            <Image
              src="/icons/pin.svg"
              height={12}
              width={12}
              color="#bdbdbd"
              alt="location logo"
            />
            <p className="text-xs">{event.location}</p>
          </div>
          <p className="font-bold text-lg my-0.5">{event.name}</p>
          <div className="flex items-center gap-3 w-full">
            <div className="flex gap-1 text-[#bdbdbd]">
              <Image
                src="/icons/calendar.svg"
                height={12}
                width={12}
                color="#bdbdbd"
                alt="date logo"
              />
              <p className="text-xs">{event.date}</p>
            </div>

            <div className="w-px h-3 bg-[#91919147]" />

            <div className="flex gap-1 text-[#bdbdbd]">
              <Image
                src="/icons/clock.svg"
                height={12}
                width={12}
                color="#bdbdbd"
                alt="time logo"
              />
              <p className="text-xs">{event.date}</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
