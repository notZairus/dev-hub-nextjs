import mongoose from "mongoose";
import { Event } from "@/lib/global";

const EventSchema = new mongoose.Schema<Event>({
    title: {
        type: String,
        trim: true,
        index: true,
        required: [true, "title is required."]
    },
    description: {
        type: String,
        trim: true,
        required: [true, "description is required."]
    },
    image: {
        type: String,
        required: [true, "image is required."]
    },
    location: {
        type: String,
        trim: true,
        required: [true, "location is required."]
    },
    date: {
        type: String,
        required: [true, "date is required."]
    },
    time: {
        type: String,
        required: [true, "time is required."]
    },
    audience: {
        type: String,
        trim: true,
        required: [true, "audience is required."]
    },
    mode: {
        type: String,
        enum: ["online", "offline", "hybrid"],
        required: [true, "mode is required."]
    },
    agenda: {
        type: String,
        trim: true
    },
    organizer: {
        type: String,
        trim: true,
        required: [true, "organizer is required."]
    },
    tags: [{
        type: String,
        trim: true
    }],
    slug: {
        type: String,
        unique: true,
        index: true,
        required: [true, "slug is required."]
    }
});

EventSchema.pre("save", async function () {
    if (!this.isModified("title")) {
        return;
    }
    
    this.slug = this.title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")      // Replace spaces with hyphens
        .replace(/[^\w-]+/g, "");  // Added a '+' and '-' to the regex
});


export default mongoose.model("Event", EventSchema);