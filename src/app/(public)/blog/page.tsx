import { FeaturedPosts } from "@/sections/blog/featured";
import { FeaturedPostsSkeleton } from "@/sections/blog/featured/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog | Crypto Unveil",
    description:
      "Explore our blog posts to learn more about blockchain technology, cryptocurrencies, and the latest trends in the industry. Stay up-to-date with the latest news and insights from the world of blockchain.",
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
