import { Skeleton } from "../ui/skeleton";

export default function SkeletonMovieList() {
  return (
    <div className="flex flex-col space-y-3 bg-black rounded-xl">
      <Skeleton className="h-[222px] w-full rounded-xl bg-gray-700" />
      <div className="space-y-2">
        <Skeleton className="h-4 w-full bg-gray-700" />
        <Skeleton className="h-2 w-full bg-gray-700" />
      </div>
    </div>
  );
}
