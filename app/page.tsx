import ExploreBtn from "@/components/ExploreBtn";
import Spacer from "@/components/Spacer";
import EventCard from "@/components/EventCard";
import Event from "@/models/Event";
import connectDb from "@/lib/db";

const Page = async () => {
  await connectDb();
  const _events = await Event.find().sort({ createdAt: -1 }).lean();
  const events = JSON.parse(JSON.stringify(_events));

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
