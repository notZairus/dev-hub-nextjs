import { NextRequest, NextResponse } from "next/server";
import { v2 as cloudinary } from "cloudinary";
import connectDb from "@/lib/db";
import Event from "@/models/Event";

export async function POST(req: NextRequest) {
    await connectDb();
    const data = await req.formData(); 
    const raw = Object.fromEntries(data.entries());

    const img: File = raw.image as File;
    const buffer = await img.arrayBuffer();
    const blob = Buffer.from(buffer);

    const result = await new Promise((resolve, reject) => {
        cloudinary.uploader.upload_stream({ resource_type: "image", folder: "huuluul"}, (error, result) => {
            if (error) reject(error);
            resolve(result);
        }).end(blob);
    })

    const event = {
        ...raw,
        tags: JSON.parse(raw.tags as string),
        agenda: JSON.parse(raw.agenda as string),
        image: (result as { secure_url: string }).secure_url,
    };

    const newEvent = new Event(event);
    const savedEvent = await newEvent.save();

    return NextResponse.json(
        { message: "successful!", event: savedEvent }
    , { status: 200 })
}

export async function GET() {
    await connectDb();

    const events = await Event.find().sort({ createdAt: -1 }).lean();
    const safeEvent = JSON.parse(JSON.stringify(events));

    return NextResponse.json({
        message: 'successful',
        events: safeEvent
    }, { status: 200 });
}
