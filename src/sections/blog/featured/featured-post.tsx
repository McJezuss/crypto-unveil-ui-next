import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { Post } from "@/types/blog";
import { format } from "date-fns";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

interface FeaturedPostProps {
  post: Post;
}

export const FeaturedPost: FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center space-y-10 max-lg:max-w-[300px]">
      <Image
        src={post.coverImageUrl}
        alt={post.title}
        width={300}
        height={300}
        className="rounded-xl grayscale m-auto aspect-square object-cover max-lg:w-72 max-lg:h-72"
        priority
        sizes="(max-width: 768px) 80vw, (max-width: 1024px) 50vw (max-width: 1200px) 30vw, 40vw"
      />

      <div className="flex flex-col space-y-5 font-avenir text-lg justify-center items-center text-center tracking-tight text-break">
        <Typography variant="h2">{post.title}</Typography>
        <Typography variant="muted">
          {format(new Date(post.createdAt), "eeee PP")}
        </Typography>
        <Typography variant="muted">{post.tags.join(", ")}</Typography>
        <Typography variant="p">{post.previewContent}</Typography>
        <Button
          asChild
          variant={"default"}
          className="text-xl font-avenir font-bold"
        >
          <Link href={paths.blog.post(post.slug)}>
            Read More <ChevronRight className="w-5 h-5 self-center" />
          </Link>
        </Button>
      </div>
    </div>
  );
};
