import { FeaturedPosts } from "@/sections/blog/featured";
import { FeaturedPostsSkeleton } from "@/sections/blog/featured/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog | Crypto Unveil",
    description:
      "Explore our curated selection of blockchain courses designed to propel South Africans into the forefront of the digital economy. From beginner to advanced levels, our courses cover everything from the basics of blockchain technology to in-depth cryptocurrency trading and blockchain application development. Empower yourself with the knowledge to innovate, invest, and lead in the blockchain space. Start learning today and unlock the door to endless opportunities in the blockchain industry.",
  };
};

export default function BlogPosts() {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl h-full m-auto pb-20">
      <Suspense fallback={<FeaturedPostsSkeleton />}>
        <FeaturedPosts />
      </Suspense>
    </div>
  );
}
