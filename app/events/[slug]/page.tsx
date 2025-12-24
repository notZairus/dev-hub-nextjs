import { notFound } from "next/navigation";
import Image from "next/image";
import EventCard from "@/components/EventCard";
import { getSimilarEventsBySlug } from "@/lib/actions/events.action";
import connectDb from "@/lib/db";
import EventModel from "@/models/Event";
import { Event } from "@/lib/global";

import Spacer from "@/components/Spacer";
import InfoIcon from "@/components/InfoIcon";
import BookingCard from "@/components/BookingCard";

async function page({ params }: { params: Promise<{ slug: string }> }) {
  await connectDb();
  const { slug } = await params;
  const _event = await EventModel.findOne({ slug: slug });
  const event: Event = JSON.parse(JSON.stringify(_event));
  const similarEvents = await getSimilarEventsBySlug(event.slug);

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
          <BookingCard slug={slug} />
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
          {event.agenda?.map((agenda: string) => (
            <li key={agenda}>{agenda}</li>
          ))}
        </ul>
      </section>

      <Spacer height={24} />

      <section className="mb-12">
        <h2 className="font-bold text-4xl">Similar Events</h2>
        <div className="w-full flex md:flex-row flex-col gap-12 mt-4">
          {similarEvents.length < 3
            ? similarEvents.map((ev: Event) => (
                <div key={event.slug} className="flex-1 md:max-w-1/3 relative">
                  <EventCard event={ev} />
                </div>
              ))
            : similarEvents.slice(0, 3).map((ev: Event) => (
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
