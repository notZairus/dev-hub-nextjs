import mongoose from "mongoose";
import { CachedType } from "./global";


const MONGODB_URI = process.env.MONGO_URI as string;

let cached: CachedType = globalThis.mongoose

if (!cached) {
    cached = globalThis.mongoose = { conn: null, promise: null }
}


async function dbConnect() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        if (!MONGODB_URI) {
            throw new Error("NO MONGGO URI FOUND.")
        }

        cached.promise = mongoose.connect(MONGODB_URI, { bufferCommands: false }).then((mongoose) => {
            return mongoose
        })
    }

    try {
        cached.conn = await cached.promise;
        return cached.conn;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
}


export default dbConnect;