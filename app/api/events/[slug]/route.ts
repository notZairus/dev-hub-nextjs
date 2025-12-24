import { NextRequest, NextResponse } from "next/server";
import Event from "@/models/Event";
import connectDb from "@/lib/db";



export async function GET(req: NextRequest, { params } : { params: Promise<{ slug: string }> }) {
    await connectDb();
    
    const { slug } = await params;

    if (!slug) {
        return NextResponse.json({
            message: "Missing slug parameter."
        }, { status: 500 });
    }

    const event = await Event.findOne({ slug: slug });
    const safeEvent = JSON.parse(JSON.stringify(event));
    

    if (!event) return NextResponse.json({
        message: "no event of slug: " + slug,
    }, { status: 404 });

    return NextResponse.json({ event: safeEvent } , { status: 200 })
}