"use client";
import { MovieLists, SkeletonMovieList } from "@/components";
import { useEffect, useState } from "react";
import { db } from "@/lib/firebase";
import { collection, onSnapshot } from "firebase/firestore";

export default function FeatureHome() {
  const [isClientLoaded, setIsClientLoaded] = useState(false);
  const [movies, setMovies] = useState<any>([]);

  useEffect(() => {
    setIsClientLoaded(true);

    const unsubscribe = onSnapshot(
      collection(db, "movies"),
      (snapshot) => {
        const moviesList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setMovies(moviesList);
      },
      (error) => {
        console.log(error);
      }
    );

    // ทำการยกเลิกการสมัครเมื่อคอมโพเนนต์ถูกทำลาย
    return () => unsubscribe();
  }, []);

  if (!isClientLoaded) {
    return (
      <div className="my-4">
        <SkeletonMovieList />
      </div>
    );
  }

  return (
    <>
      {Array.from(
        [1, 2, 3, 4].map((item, index) => {
          return (
            <div key={index}>
              <MovieLists items={movies} />
            </div>
          );
        })
      )}
    </>
  );
}
