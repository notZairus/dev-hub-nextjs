import ExploreBtn from "@/components/ExploreBtn";
import Spacer from "@/components/Spacer";
import EventCard from "@/components/EventCard";
import { Event } from "@/lib/global";

const DEFAULT_URL = process.env.NEXT_PUBLIC_DEFAULT_URL as string;

const Page = async () => {
  const result = await fetch(`${DEFAULT_URL}/api/events`);
  const { events } = await result.json();

  return (
    <section>
      <div>
        <h1 className="text-center">The Dev Hub</h1>
        <p className="mt-2 text-center md:max-w-3/5 mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          architecto ratione vel, ullam dolorum minus corporis obcaecati
        </p>
      </div>

      <Spacer height={8} />

      <div className="flex justify-center">
        <ExploreBtn />
      </div>

      <Spacer id="events" height={24} />

      <div>
        <h3>Featured Events</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-4 gap-12">
          {events.map((event: Event) => (
            <EventCard key={event.slug} event={event} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
