export interface Event {
  uuid?: string;
  title: string;
  description: string;
  image: string;
  location: string;
  date: string;
  time: string;
  audience: string;
  mode: "online" | "offline" | "hybrid"; // Using a literal union for stricter typing
  agenda?: string[]; // Optional field
  organizer: string;
  tags: string[];
  slug: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export interface CachedType {
  conn: typeof Connection | null,
  promise: Promise<typeof Connection> | null
}


declare global {
  var mongoose: CachedType; // the name of the variable here will be the property of globalThis???
}

