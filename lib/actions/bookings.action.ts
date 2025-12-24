"use server";

import Event from "@/models/Event";
import Booking from "@/models/Booking";
import connectDb from "../db";


export async function bookEvent(slug: string, email: string) {
    await connectDb();
    const event = await Event.findOne({ slug: slug });
    const newBooking = new Booking({ eventId: event.id, email: email });
    await newBooking.save();
}