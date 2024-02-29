import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { EducationalOrganization, WithContext } from "schema-dts";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | Crypto Unveil",
    description:
      "Empower your future with our free, high-quality blockchain education platform, tailored for South Africans. Dive into the world of blockchain technology and cryptocurrency through our comprehensive courses designed to elevate your skills, knowledge, and opportunities in the digital economy. Start your journey towards becoming a blockchain expert today and unlock the potential of this revolutionary technology.",
    metadataBase: new URL(process.env.S3_ENDPOINT || ""),
  };
};

export default function Home() {
  // Schema org
  const jsonLd: WithContext<EducationalOrganization> = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    name: "Crypto Unveil",
    image: `${process.env.WEBSITE_URL}/logos/icon.png`,
    founder: {
      "@type": "Person",
      name: "Timo Klaasee",
      jobTitle: "CEO",
      url: `https://www.linkedin.com/in/timoklaasee/`,
    },
    url: process.env.WEBSITE_URL,
    logo: `${process.env.WEBSITE_URL}/logos/icon.png`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="flex flex-col space-y-20 justify-center items-center pb-20 lg:pt-10">
        {/* Landing */}
        <Logo
          variant={"full"}
          className="max-w-[400px] max-lg:max-w-[300px]"
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw"
        />

        <div className="flex flex-col text-center space-y-3">
          <Typography>
            Learn to harness the power of blockchain technology in our
            comprehensive courses.
          </Typography>
          <Typography>
            Our courses are designed for beginners and experts alike.
          </Typography>
        </div>

        <div className="flex flex-row space-x-5">
          <Button
            variant={"secondary"}
            asChild
            className="p-5"
          >
            <Link
              href={paths.blog.index}
              className="flex flex-row items-center"
            >
              <Typography variant="large">Start Learning</Typography>
              <ChevronRight className="h-6 text-white" />
            </Link>
          </Button>
        </div>
      </div>
    </>
  );
}
