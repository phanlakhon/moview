# Movie Review App

This is a **Movie Review** web application built with [Next.js](https://nextjs.org), [Firebase](https://firebase.google.com), and [Tailwind CSS](https://tailwindcss.com). Users can browse, review, and rate movies while enjoying a seamless experience.

## Features

- **Authentication**: Sign in using Google authentication (Firebase Authentication).
- **Movie Listings**: Browse a collection of movies with details fetched from Firebase Firestore.
- **User Reviews**: Users can leave reviews and ratings for movies.
- **Responsive UI**: Styled with Tailwind CSS for a modern and fully responsive design.
- **Real-time Updates**: Data is synced in real-time using Firebase Firestore.

## Tech Stack

- **Next.js** - React-based framework for fast, server-side rendered applications.
- **Firebase** - Backend-as-a-Service for authentication, Firestore database, and storage.
- **Tailwind CSS** - Utility-first CSS framework for styling.

## Getting Started

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v16 or later)
- [Firebase CLI](https://firebase.google.com/docs/cli)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/phanlakhon/moview.git
   cd moview
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Set up Firebase:
   - Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
   - Enable **Firestore Database** and **Authentication (Google Sign-In)**.
   - Copy your Firebase config and create a `.env.local` file:
     ```
     NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
     NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
     ```

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

   Open [http://localhost:3000](http://localhost:3000) to view the app.

## Deployment

The easiest way to deploy your app is with [Vercel](https://vercel.com/):

```bash
vercel
```

Or deploy to Firebase Hosting:

```bash
firebase deploy
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Firebase Documentation](https://firebase.google.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## License

This project is licensed under the MIT License.

