import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
    eventId: { // i want this to be a foreign key of Event
        type: mongoose.Schema.Types.ObjectId,
        ref: "Event",
        index: true,
        required: [true, "event id is required."]
    },
    email: {
        type: String,
        index: true,
        required: [true, "user email is required."]
    }
}, { timestamps: true });


BookingSchema.index({ eventId: 1, email: 1 }, { unique: true });

export default mongoose.model("Booking", BookingSchema);