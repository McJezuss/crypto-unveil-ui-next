import { getPosts } from "@/api/blog";
import { Button } from "@/components/ui/button";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { FeaturedPost } from "./featured-post";
import { BlogCard } from "../post-card";
import { Typography } from "@/components/ui/typography";

export const FeaturedPosts = async () => {
  const { data } = await getPosts({
    featured: true,
  });

  return (
    <div className="flex flex-col justify-center items-center max-w-6xl h-full pb-20 max-lg:max-w-[350px]">
      <FeaturedPost post={data[0]} />
      <div className="flex max-lg:flex-col lg:flex-row justify-between w-full items-center mt-20 mb-5">
        <Typography variant="h3">Theory Courses</Typography>
        <Button
          asChild
          variant={"ghost"}
          className="text-xl font-avenir font-bold"
        >
          <Link
            href={paths.blog.list({
              tags: ["Theory"],
            })}
          >
            See All Theory Courses{" "}
            <ChevronRight className="w-5 h-5 self-center" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 w-full">
        {data
          .filter((post) => {
            // if tags contain Theory
            return post.tags.includes("Theory") && !post.featured;
          })
          .map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              imageSizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw"
            />
          ))}
      </div>
      <div className="flex max-lg:flex-col lg:flex-row justify-between w-full items-center mt-20 mb-5">
        <Typography variant="h3">Smart Contracts Courses</Typography>
        <Button
          asChild
          variant={"ghost"}
          className="text-xl font-avenir font-bold"
        >
          <Link href={paths.blog.list({ tags: ["Smart Contracts"] })}>
            See All Smart Contracts Courses{" "}
            <ChevronRight className="w-5 h-5 self-center" />
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-10 w-full">
        {data
          .filter((post) => {
            // if tags contain Theory
            return post.tags.includes("Smart Contracts") && !post.featured;
          })
          .map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              imageSizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw"
            />
          ))}
      </div>
    </div>
  );
};
