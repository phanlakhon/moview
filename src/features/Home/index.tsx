"use client";
import { MovieLists } from "@/components";
import { SkeletonMovieList } from "@/components/Skeletons";
import { useEffect, useState } from "react";

export default function FeatureHome() {
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    setIsClientLoaded(true);
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
              <MovieLists />
            </div>
          );
        })
      )}
    </>
  );
}
