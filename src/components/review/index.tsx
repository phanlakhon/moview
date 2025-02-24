"use client";

import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

const Reviews = () => {
  const [reviews, setReviews] = useState<any>([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "reviews"), // ใช้คอลเล็กชัน "reviews"
      (snapshot) => {
        const reviewsList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setReviews(reviewsList);
      },
      (error) => {
        console.log(error);
      }
    );

    // ทำการยกเลิกการสมัครเมื่อคอมโพเนนต์ถูกทำลาย
    return () => unsubscribe();
  }, []);

  return (
    <div className="max-w-2xl mx-auto p-6  shadow-lg rounded-lg">
      <h2 className="text-3xl mb-6">Movie Reviews</h2>
      <div>
        {reviews.map((review: any) => (
          <div key={review.id} className="mb-4">
            <h3 className="text-xl">{review.title}</h3>
            <p>{review.review}</p>
            <p>Rating: {review.rating}/5</p>
            <p>{new Date(review.createdAt.seconds * 1000).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
