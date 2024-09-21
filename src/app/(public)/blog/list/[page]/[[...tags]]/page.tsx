import { Crumbs } from "@/components/ui/crumbs";
import { paths } from "@/paths";
import { BlogList } from "@/sections/blog/list";
import { BlogListSkeleton } from "@/sections/blog/list/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog Posts | De Cent",
    description:
      "Explore our blog posts to learn more about blockchain technology, cryptocurrencies, and the latest trends in the industry. Stay up-to-date with the latest news and insights from the world of blockchain.",
  };
};

export default function BlogPostsList({
  params: { page = 1, tags },
}: {
  params: { page: number; tags?: string[] };
}) {
  return (
    <div className="flex flex-col justify-center items-center max-w-6xl h-full m-auto pt-10 pb-10">
      <div className="flex flex-col lg:flex-row justify-between w-full">
        <Crumbs
          crumbs={[
            { name: "Courses", href: paths.blog.index },
            { name: "All Courses", href: paths.blog.list() },
          ]}
        />
      </div>

      <Suspense fallback={<BlogListSkeleton />}>
        <BlogList
          currentPage={page}
          tags={tags}
        />
      </Suspense>
    </div>
  );
}
