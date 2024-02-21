import { BlogCardSkeleton } from "../../skeletons/post-card";

export const BlogListSkeleton = () => {
  return (
    <>
      <div className="grid grid-cols-2 max-lg:grid-cols-1 gap-5">
        {Array.from({ length: 4 }).map((_, index) => (
          <BlogCardSkeleton key={index} />
        ))}
      </div>
    </>
  );
};
