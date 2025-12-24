"use client";

import { useState } from "react";
import { bookEvent } from "@/lib/actions/bookings.action";

export default function BookingCard({ slug }: { slug: string }) {
  const [bookings, setBookings] = useState();
  const [email, setEmail] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    setEmail("");

    await bookEvent(slug, email);

    // why the code past it is not executing?
    setBookings((prev) => prev + 1);
    setSubmitted(true);
  };

  return (
    <form
      className="w-full bg-[#0d161a] border border-[#1a2d35] min-h-20 rounded-xl p-8"
      onSubmit={submit}
    >
      <h2 className="font-bold text-3xl">Book Your Spot</h2>
      <p className="mt-2 text-gray-500">
        {bookings
          ? `${bookings} persons booked this event!`
          : `Be the first one to book this event!`}
      </p>
      {submitted ? (
        <p className="mt-4 text-xl">Thank you for booking!</p>
      ) : (
        <div>
          <div className="my-5">
            <label htmlFor="email" className="text-lg">
              Email Address
            </label>
            <br />
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="youemail@example.com"
              className="border border-[#243b47] outline-none text-xl bg-[#182830] p-3 rounded-lg w-full mt-2"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full bg-white text-black rounded-lg text-xl p-3 font-bold"
            >
              Submit
            </button>
          </div>
        </div>
      )}
    </form>
  );
}
