'use server';

import Event from "@/models/Event";

export async function getSimilarEventsBySlug(slug: string) {
    const event = await Event.findOne({ slug: slug });
    const similarEvents = await Event.find({ _id: { $ne: event._id }, tags: { $in: event.tags} }).lean();
    const safeSimilarEvents = JSON.parse(JSON.stringify(similarEvents));
    return similarEvents ? safeSimilarEvents : [];
}