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

  if (!data) return { title: "Blog | De Cent" };

  return {
    title: `${data.title} | De Cent`,
    authors: [{ name: "De Cent" }, { name: "Timo Klaasee" }],
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
        "De Cent",
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
      siteName: "De Cent",
      url: `${process.env.WEBSITE_URL}${paths.blog.post(slug)}`,
      locale: "en_ZA",
    },
    robots: "index, follow",
    applicationName: "De Cent",
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
