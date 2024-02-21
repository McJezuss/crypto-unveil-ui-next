import { Skeleton } from "@/components/ui/skeleton";
import { BlogCardSkeleton } from "../../skeletons/post-card";

export const FeaturedPostsSkeleton = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl h-full m-auto pb-20">
      <div className="flex flex-col space-y-10 lg:pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-center items-center gap-20 max-lg:gap-10">
          <Skeleton className="w-[300px] h-[300px] rounded-full m-auto" />

          <div className="flex flex-col space-y-5 justify-center items-center ">
            <Skeleton className="w-96 h-10 " />
            <Skeleton className="w-96 h-8" />
            <Skeleton className="w-96 h-16" />
            <Skeleton className="w-40 h-12 rounded-md" />
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between w-full items-center mt-20 mb-5">
        <Skeleton className="w-36 h-10" />
        <Skeleton className="w-36 h-10" />
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5 w-full">
        {Array.from({ length: 2 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </div>
  );
};
