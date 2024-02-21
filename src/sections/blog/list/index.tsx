import { getPosts } from "@/api/blog";
import { BlogCard } from "../post-card";
import { BlogListPagination } from "./list-pagination";
import { TagSelect } from "./tag-select";

export const BlogList = async ({
  currentPage,
  tags,
}: {
  currentPage: number;
  tags?: string[];
}) => {
  const { data, numberOfPages, availableTags } = await getPosts({
    page: currentPage,
    tags: tags?.map(decodeURIComponent),
  });

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex lg:justify-end lg:-translate-y-10 lg:h-0">
        <TagSelect
          tags={tags}
          availableTags={availableTags}
        />
      </div>
      <div className="space-y-5">
        <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
          {data.map((post) => (
            <BlogCard
              key={post.id}
              post={post}
              imageSizes="(max-width: 768px) 30vw, (max-width: 1024px) 20vw"
              imagePriority
            />
          ))}
        </div>
        <BlogListPagination
          page={currentPage}
          numberOfPages={numberOfPages}
          tags={tags}
        />
      </div>
    </div>
  );
};
