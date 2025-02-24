import Link from "next/link";
import { Divider } from "../Dividers";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";
import { Skeleton } from "../ui/skeleton";
import { SkeletonMovieList } from "../Skeletons";
export default function MovieLists() {
  const [isClientLoaded, setIsClientLoaded] = useState(false);

  useEffect(() => {
    setIsClientLoaded(true);
  }, []);

  return (
    <div className="my-4">
      <div className="flex items-baseline gap-3 mb-4">
        <h1 className="text-2xl font-semibold text-yellow">New Releases</h1>
        <Link className="text-sm font-light text-gray-500 hover:text-gray-500/80 underline underline-offset-4" href={"/"}>
          See All
        </Link>
      </div>
      <Divider />

      <div className="grid grid-cols-7 gap-4 mt-6 mb-10">
        {Array.from(
          [1, 2, 3, 4, 5, 6, 7].map((number, index) => (
            <Fragment key={index}>
              {!isClientLoaded ? (
                <SkeletonMovieList />
              ) : (
                <Link className="group transition duration-30" key={index} href={"/"}>
                  <div className="relative w-full overflow-hidden rounded-md">
                    <div className="relative w-full" style={{ paddingBottom: "145.6%" }}>
                      <Image
                        src={`https://loremflickr.com/200/200?random=${Math.floor(Math.random() * 100)}`}
                        alt="Picture of the author"
                        width={237}
                        height={244}
                        className="absolute top-0 left-0 w-full h-full object-cover rounded-md animate-fade-in block scale-100 transform object-center transition duration-500"
                      />
                    </div>
                  </div>

                  <p className="mt-2 group-hover:text-white/50">For Movie Name</p>
                </Link>
              )}
            </Fragment>
          ))
        )}
      </div>
    </div>
  );
}
