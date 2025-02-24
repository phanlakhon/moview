"use client";

import { useState } from "react";
import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

const AddReview = () => {
  const [title, setTitle] = useState("");
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "reviews"), {
        title,
        review,
        rating,
        createdAt: new Date(),
      });
      setTitle("");
      setReview("");
      setRating(0);
    } catch (error) {
      console.error("Error adding review: ", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-black shadow-lg rounded-lg text-white">
      <h2 className="text-3xl font-semibold mb-6 text-yellow">Add a Movie Review</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-yellow">
            Movie Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow bg-black text-white"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="review" className="block text-sm font-medium text-yellow">
            Review
          </label>
          <textarea
            id="review"
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow bg-black text-white"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="rating" className="block text-sm font-medium text-yellow">
            Rating (1 to 5)
          </label>
          <input
            type="number"
            id="rating"
            value={rating}
            onChange={(e) => setRating(Number(e.target.value))}
            min="1"
            max="5"
            required
            className="mt-1 block w-full px-4 py-2 border border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow bg-black text-white"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-yellow text-black font-semibold rounded-lg shadow-md hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddReview;
