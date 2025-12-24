import { Event } from "@/lib/global";
import { notFound } from "next/navigation";
import Image from "next/image";
import EventCard from "@/components/EventCard";

import Spacer from "@/components/Spacer";
import InfoIcon from "@/components/InfoIcon";

const DEFAULT_URL = process.env.NEXT_PUBLIC_DEFAULT_URL;

async function page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const res = await fetch(`${DEFAULT_URL}/api/events/${slug}`);
  const { event }: { event: Event } = await res.json();

  const res2 = await fetch(`${DEFAULT_URL}/api/events`);
  const { events } = await res2.json();
  const relatedEvents = events.filter(
    (_event: Event) => _event.slug !== event.slug
  );

  if (!event) return notFound();

  return (
    <section className="text-xl">
      <Spacer height={5} />
      <div className="space-y-4">
        <h1>{event.title}</h1>
        <p className="mt-4 w-full md:w-2/3 text-xl">{event.description}</p>
      </div>
      <section className="w-full flex md:flex-row flex-col gap-16 justify-between mt-8">
        <div className="flex-2 relative rounded-xl overflow-hidden aspect-square md:aspect-video w-full">
          <Image src={event.image} alt={event.title} fill />
        </div>
        <aside className="flex-1">
          <div className="w-full bg-[#0d161a] border border-[#1a2d35] min-h-20 rounded-xl p-8">
            <h2 className="font-bold text-3xl">Book Your Spot</h2>
            <div className="my-5">
              <label htmlFor="email" className="text-lg">
                Email Address
              </label>
              <br />
              <input
                type="text"
                placeholder="youemail@example.com"
                className="border border-[#243b47] outline-none text-xl bg-[#182830] p-3 rounded-lg w-full mt-2"
              />
            </div>
            <div>
              <button className="w-full bg-white text-black rounded-lg text-xl p-3 font-bold">
                Submit
              </button>
            </div>
          </div>
        </aside>
      </section>

      <Spacer height={12} />

      <section>
        <h2 className="font-bold text-3xl">Overview</h2>
        <div className="mt-4 w-full md:w-2/3">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            perspiciatis aspernatur minus, praesentium, tempora error, vero
            veniam dolor ipsa illo ad deleniti pariatur! Ipsam tenetur harum
            nemo sapiente, expedita laborum. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Corrupti cumque ad nostrum consequatur
            accusamus, quia deserunt repellat. Dolorum, qui dolores dolorem
            sapiente neque esse illum vitae amet magni a ipsum?
          </p>
        </div>
      </section>

      <Spacer height={12} />

      <section>
        <h2 className="font-bold text-3xl">Event Details</h2>
        <div className="w-full md:w-2/3 mt-4 space-y-4">
          <InfoIcon info={`Date: ` + event.date} icon={"/icons/calendar.svg"} />
          <InfoIcon info={"Time: " + event.time} icon={"/icons/clock.svg"} />
          <InfoIcon info={"Venue: " + event.location} icon={"/icons/pin.svg"} />
          <InfoIcon info={"Mode: " + event.mode} icon={"/icons/mode.svg"} />
          <InfoIcon
            info={"Audience: " + event.audience}
            icon={"/icons/audience.svg"}
          />
        </div>
      </section>

      <Spacer height={12} />

      <section>
        <h2 className="font-bold text-3xl">Agenda</h2>
        <ul className="mt-4 space-y-4 list-disc list-inside pl-2 w-full md:w-2/3">
          {event.agenda?.map((agenda) => (
            <li key={agenda}>{agenda}</li>
          ))}
        </ul>
      </section>

      <Spacer height={24} />

      <section className="mb-12">
        <h2 className="font-bold text-4xl">Similar Events</h2>
        <div className="w-full flex md:flex-row flex-col gap-12 mt-4">
          {relatedEvents.length < 3
            ? relatedEvents.map((ev: Event) => (
                <div key={event.slug} className="flex-1 md:max-w-1/3 relative">
                  <EventCard event={ev} />
                </div>
              ))
            : relatedEvents.slice(0, 3).map((ev: Event) => (
                <div key={event.slug} className="flex-1 relative">
                  <EventCard event={ev} />
                </div>
              ))}
        </div>
      </section>
    </section>
  );
}

export default page;
