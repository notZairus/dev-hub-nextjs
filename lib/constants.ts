import { Event } from "./global";

export const events: Event[] = [
    {
        title: "React Workshop",
        description: "A deep dive into React hooks and performance patterns.",
        image: "/images/event1.png",
        location: "San Francisco, CA",
        date: "March 15, 2024",
        time: "10:00 AM",
        audience: "Frontend Developers",
        mode: "offline",
        organizer: "TechEvents Inc",
        tags: ["react", "frontend"],
        slug: "react-workshop"
    },
    {
        title: "Next.js Conference",
        description: "Explore the latest features of Next.js 14 and App Router.",
        image: "/images/event2.png",
        location: "New York, NY",
        date: "March 22, 2024",
        time: "9:00 AM",
        audience: "Full Stack Developers",
        mode: "hybrid",
        organizer: "Vercel Community",
        tags: ["nextjs", "framework"],
        slug: "nextjs-conference"
    },
    {
        title: "TypeScript Masterclass",
        description: "Master advanced types, generics, and utility types.",
        image: "/images/event3.png",
        location: "Austin, TX",
        date: "April 5, 2024",
        time: "2:00 PM",
        audience: "Intermediate Developers",
        mode: "online",
        organizer: "TS Academy",
        tags: ["typescript"],
        slug: "typescript-masterclass"
    },
    {
        title: "Web Development Summit",
        description: "The biggest gathering of web enthusiasts in the PNW.",
        image: "/images/event4.png",
        location: "Seattle, WA",
        date: "April 18, 2024",
        time: "11:00 AM",
        audience: "All Skill Levels",
        mode: "offline",
        organizer: "WebDev Alliance",
        tags: ["web", "networking"],
        slug: "web-dev-summit"
    },
    {
        title: "JavaScript Fundamentals",
        description: "Back to basics: Closures, Prototypal Inheritance, and Async.",
        image: "/images/event5.png",
        location: "Boston, MA",
        date: "May 1, 2024",
        time: "3:30 PM",
        audience: "Beginners",
        mode: "online",
        organizer: "JS Boston",
        tags: ["javascript"],
        slug: "javascript-fundamentals"
    },
    {
        title: "Full Stack Development Bootcamp",
        description: "Building end-to-end applications with the MERN stack.",
        image: "/images/event6.png",
        location: "Denver, CO",
        date: "May 14, 2024",
        time: "1:00 PM",
        audience: "Aspiring Developers",
        mode: "hybrid",
        organizer: "Denver Code School",
        tags: ["fullstack", "mern"],
        slug: "fullstack-bootcamp"
    }
];