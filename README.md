# Dev Hub

A Next.js application for a developer hub, featuring event listings and booking capabilities.

## Features

*   Browse upcoming developer events.
*   View detailed information for each event.
*   Book your spot for an event.

## Getting Started

### Prerequisites

*   Node.js (version 20.x or later)
*   npm

### Installation

1.  Clone the repository:
    ```bash
    git clone https://github.com/your-username/dev-hub.git
    ```
2.  Navigate to the project directory:
    ```bash
    cd dev-hub
    ```
3.  Install the dependencies:
    ```bash
    npm install
    ```

### Running the Development Server

To run the application in development mode, use the following command:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

The `package.json` file includes the following scripts:

-   `npm run dev`: Starts the development server.
-   `npm run build`: Creates a production build of the application.
-   `npm run start`: Starts the production server.
-   `npm run lint`: Lints the code using ESLint.

## Technologies Used

*   [Next.js](https://nextjs.org/) - React framework for production
*   [React](https://reactjs.org/) - A JavaScript library for building user interfaces
*   [TypeScript](https://www.typescriptlang.org/) - Typed superset of JavaScript
*   [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework
*   [MongoDB](https://www.mongodb.com/) - NoSQL database
*   [Mongoose](https.mongoosejs.com/) - MongoDB object modeling for Node.js
*   [Cloudinary](https://cloudinary.com/) - Cloud-based image and video management
*   [Lucide React](https://lucide.dev/guide/packages/lucide-react) - A library of simply beautiful icons

## Folder Structure

```
/
|-- app/                # Main application folder
|   |-- api/            # API routes
|   |-- events/         # Event-related pages
|   |-- globals.css     # Global stylesheets
|   |-- layout.tsx      # Main layout component
|   `-- page.tsx        # Main page component
|-- components/         # Reusable React components
|-- lib/                # Helper functions and utilities
|   `-- actions/        # Server-side actions
|-- models/             # Mongoose models for MongoDB
|-- public/             # Static assets (images, icons)
`-- ...
```