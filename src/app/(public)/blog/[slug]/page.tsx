import { getPostBySlug } from "@/api/blog";
import { paths } from "@/paths";
import { BlogPost } from "@/sections/blog/post";
import { BlogPostSkeleton } from "@/sections/blog/post/skeletons";
import { Metadata } from "next";
import { Suspense } from "react";

interface Props {
  params: {
    slug: string;
  };
}

export const generateMetadata = async ({
  params: { slug },
}: Props): Promise<Metadata> => {
  const { data } = await getPostBySlug(slug);

  if (!data) return { title: "Blog | Crypto Unveil" };

  return {
    title: `${data.title} | Crypto Unveil`,
    authors: [{ name: "Crypto Unveil" }, { name: "Timo Klaasee" }],
    description: data.previewContent,
    keywords: [
      ...data.tags,
      "cryptocurrency education",
      "blockchain",
      "blockchain education",
      "crypto africa",
    ],
    metadataBase: new URL(process.env.S3_ENDPOINT || ""),
    openGraph: {
      countryName: "South Africa",
      type: "article",
      authors: [
        "Crypto Unveil",
        "Timo Klaasee",
        `https://www.linkedin.com/in/timoklaasee/`,
      ],
      description: data.previewContent,
      images: [
        {
          url: data.coverImageUrl,
          width: 400,
          height: 400,
          alt: "Black and gray cover image",
        },
      ],
      publishedTime: data.createdAt,
      tags: [
        ...data.tags,
        "cryptocurrency education",
        "blockchain",
        "blockchain education",
        "crypto africa",
      ],
      title: data.title,
      siteName: "Crypto Unveil",
      url: `${process.env.WEBSITE_URL}${paths.blog.post(slug)}`,
      locale: "en_ZA",
    },
    robots: "index, follow",
    applicationName: "Crypto Unveil",
  };
};

export default function PostPage({ params: { slug } }: Props) {
  return (
    <div className="flex flex-col pt-20 pb-20 max-w-6xl m-auto">
      <Suspense fallback={<BlogPostSkeleton />}>
        <BlogPost slug={slug} />
      </Suspense>
    </div>
  );
}
