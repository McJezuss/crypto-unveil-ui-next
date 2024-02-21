import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { paths } from "@/paths";
import { Post } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { format } from "date-fns";

interface BlogCardProps {
  post: Post;
  imageSizes?: string;
  imagePriority?: boolean;
}

export const BlogCard: FC<BlogCardProps> = ({
  post,
  imageSizes,
  imagePriority,
}) => {
  return (
    <Link
      href={paths.blog.post(post.slug)}
      className="h-full"
    >
      <Card className="h-full transition ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl duration-500 w-full min-w-[500px] max-lg:max-w-[400px] max-lg:min-w-[300px]">
        <CardHeader className="flex flex-row space-x-5 max-lg:flex-col max-lg:space-y-5 max-lg:space-x-0 max-lg:items-center max-lg:text-center">
          <Image
            src={post.coverImageUrl}
            alt={post.title}
            width={150}
            height={50}
            className="rounded-lg grayscale aspect-square object-cover"
            sizes={imageSizes}
            quality={60}
            priority={imagePriority}
          />
          <div className="space-y-2">
            <CardTitle className="font-bebas text-3xl font-normal">
              {post.title}
            </CardTitle>
            <CardDescription className="font-avenir text-sm">
              {format(new Date(post.createdAt), "eeee, PP")}
            </CardDescription>
            <CardDescription className="font-avenir text-sm">
              {post.tags.join(", ")}
            </CardDescription>
          </div>
        </CardHeader>
        <CardContent className="max-lg:text-center">
          <p className="font-avenir text-base">{post.previewContent}</p>
        </CardContent>
      </Card>
    </Link>
  );
};
