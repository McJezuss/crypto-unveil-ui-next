import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { FC } from "react";

export const BlogCardSkeleton: FC = () => {
  return (
    <Card className="h-full min-w-[500px] max-lg:min-w-[350px]">
      <CardHeader className="flex flex-row space-x-5 max-lg:flex-col max-lg:space-y-5 max-lg:space-x-0 max-lg:items-center max-lg:text-center">
        <Skeleton className="rounded-full aspect-square object-cover w-[150px] h-[150px]" />
        <div className="space-y-2 w-full">
          <Skeleton className=" w-full h-8" />
          <Skeleton className=" w-full h-3" />
        </div>
      </CardHeader>
      <CardContent className="max-lg:text-center space-y-1">
        <Skeleton className=" w-full h-4" />
        <Skeleton className=" w-full h-4" />
        <Skeleton className=" w-full h-4" />
      </CardContent>
    </Card>
  );
};
