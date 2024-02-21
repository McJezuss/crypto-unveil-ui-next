import { Crumbs } from "@/components/ui/crumbs";
import { paths } from "@/paths";
import { BlogList } from "@/sections/blog/list";
import { BlogListSkeleton } from "@/sections/blog/list/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Blog Posts | Crypto Unveil",
    description:
      "Explore our curated selection of blockchain courses designed to propel South Africans into the forefront of the digital economy. From beginner to advanced levels, our courses cover everything from the basics of blockchain technology to in-depth cryptocurrency trading and blockchain application development. Empower yourself with the knowledge to innovate, invest, and lead in the blockchain space. Start learning today and unlock the door to endless opportunities in the blockchain industry.",
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
