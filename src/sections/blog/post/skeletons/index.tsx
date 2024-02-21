import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";

export const BlogPostSkeleton = () => {
  return (
    <>
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-row max-lg:flex-col items-center max-lg:items-start space-x-10 max-lg:space-x-0 max-lg:space-y-10">
            <Skeleton className="rounded-full w-[200px] h-[200px]" />
            <div className="flex flex-col space-y-2 w-96">
              <Skeleton className="w-full h-36" />
              <Skeleton className="w-full h-6" />
            </div>
          </div>
          <Separator className="my-10" />
          <Skeleton className="h-96 w-full mt-20" />
        </CardContent>
      </Card>
    </>
  );
};
