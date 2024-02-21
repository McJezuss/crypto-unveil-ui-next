import { getPostBySlug } from "@/api/blog";
import { Card, CardContent } from "@/components/ui/card";
import { Crumbs } from "@/components/ui/crumbs";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { format } from "date-fns";
import Image from "next/image";
import { redirect } from "next/navigation";
import Markdown, { Components } from "react-markdown";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import { Blog, WithContext } from "schema-dts";
import { CodeRenderer } from "./markdown-renderers";
import { PostNavigation } from "./post-navigation";

const components: Components = {
  code: CodeRenderer,
};

export const BlogPost = async ({ slug }: { slug: string }) => {
  const { data } = await getPostBySlug(slug);

  if (!data) {
    redirect(paths.blog[404](slug));
  }

  // Schema org
  const jsonLd: WithContext<Blog> = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: {
      "@type": "PronounceableText",
      textValue: data.title,
      inLanguage: {
        "@type": "Language",
        name: "English",
      },
    },
    url: process.env.WEBSITE_URL,
    image: data.coverImageUrl,
    description: data.previewContent,
    author: {
      "@type": "Person",
      name: "Timo Klaasee",
      url: "https://www.linkedin.com/in/timoklaasee/",
    },
    dateModified: new Date().toLocaleString(),
    datePublished: data.createdAt,
    publisher: {
      "@type": "EducationalOrganization",
      name: "Crypto Unveil",
      url: process.env.WEBSITE_URL,
      logo: {
        "@type": "ImageObject",
        url: process.env.WEBSITE_URL + "/public/logos/full.webp",
      },
    },
  };

  return (
    <div className="w-full">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Crumbs
        crumbs={[
          { name: "Courses", href: paths.blog.index },
          { name: "All Courses", href: paths.blog.list() },
          { name: data.title, href: paths.blog.post(slug) },
        ]}
      />
      <Card>
        <CardContent className="p-5">
          <div className="flex flex-row max-lg:flex-col items-center max-lg:items-start space-x-10 max-lg:space-x-0 max-lg:space-y-10">
            <Image
              priority
              src={data.coverImageUrl}
              alt={data.title}
              width={200}
              height={200}
              className="rounded-full grayscale aspect-square object-cover"
              sizes="(max-width: 768px) 40vw, (max-width: 1024px) 20vw, 10vw"
            />
            <div className="flex flex-col space-y-2">
              <Typography variant="h2">{data.title}</Typography>
              <Typography variant="muted">
                {format(new Date(data.createdAt), "eeee PP")}
              </Typography>
            </div>
          </div>
          <Separator className="my-10" />
          <article
            id="course-content"
            className="min-w-full space-y-8 font-avenir prose dark:prose-invert dark:prose-lg max-lg:dark:prose max-lg:dark:prose-invert [&>*]:w-full"
          >
            <Markdown
              rehypePlugins={[rehypeRaw, rehypeSlug]}
              remarkPlugins={[remarkGfm]}
              components={components}
            >
              {data.content}
            </Markdown>
          </article>
        </CardContent>
      </Card>
      <PostNavigation />
    </div>
  );
};
