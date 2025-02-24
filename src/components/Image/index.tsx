"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Skeleton } from "../ui/skeleton";

export default function ImageClientLoaded() {
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  if (!isClientLoaded) {
    return (
      <div className="flex flex-col space-y-3">
        <Skeleton className="h-[125px] w-[250px] rounded-xl" />
        <div className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <Skeleton className="h-4 w-[200px]" />
        </div>
      </div>
    );
  }

  return (
    <Image
      src={`https://loremflickr.com/200/200?random=${Math.floor(Math.random() * 100)}`}
      alt="Picture of the author"
      width={237}
      height={244}
      className="absolute top-0 left-0 w-full h-full object-cover rounded-md animate-fade-in block scale-100 transform object-center transition duration-500"
    />
  );
}
