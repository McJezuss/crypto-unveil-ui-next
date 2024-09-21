import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { OnlineBusiness, WithContext } from "schema-dts";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Home | De Cent",
    description:
      "Level up your business with blockchain and AI technology. We offer AI development and blockchain development services, including smart contract development, NFTs, crypto onboarding, crypto offboarding, admin panels, and more. We also offer traditional web development services, including websites, web apps, and mobile apps. Visit our portfolio now!",
    metadataBase: new URL(process.env.S3_ENDPOINT || ""),
  };
};

export default function Home() {
  // Schema org
  const jsonLd: WithContext<OnlineBusiness> = {
    "@context": "https://schema.org",
    "@type": "OnlineBusiness",
    name: "De Cent Pty",
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
      <div className="container flex flex-col space-y-20 justify-center items-center pb-20 lg:pt-10">
        {/* Landing */}
        <Logo
          variant={"full"}
          className="max-w-[400px] max-lg:max-w-[300px]"
          sizes="(max-width: 768px) 60vw, (max-width: 1200px) 30vw"
        />

        <div className="flex flex-col space-y-5 items-center">
          <div className="flex flex-col text-center space-y-3 border border-gray-200 p-10 rounded-lg">
            <Typography>
              Harness the power of artificial intelligence and blockchain
              technology to level up your business.
            </Typography>
            <Typography>
              We offer AI development services including machine learning,
              computer vision, ChatGPT integration, and more.
            </Typography>
            <Typography>
              We offer blockchain development services, including smart contract
              development, NFTs, crypto onboarding, crypto offboarding, admin
              panels, and more.
            </Typography>
            <Typography>
              We also offer traditional web development services, including
              websites, web apps, mobile apps and consulting.
            </Typography>
          </div>

          <div className="flex flex-row space-x-5">
            <Button
              variant={"default"}
              asChild
              className="p-5"
            >
              <Link
                href={paths.portfolio}
                className="flex flex-row items-center"
              >
                View our portfolio
                <ChevronRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col text-center space-y-8">
          <Typography variant="h2">Our non-profit projects</Typography>

          <div className="flex flex-col space-y-8 items-center">
            <div className="flex flex-col space-y-3">
              <Typography variant="h3">Crypto Unveil</Typography>
              <Typography>
                With the emergence of blockchain technology, <b>scams</b> and{" "}
                <b>pyramid schemes</b> have become <b>more prevalent</b> than
                ever.
              </Typography>
              <Typography>
                <b>Crypto Unveil</b> is a platform, owned by us, that aims to{" "}
                <b>educate</b> the public about <b>cryptocurrency</b> in an{" "}
                <b>easy</b> and <b>understandable</b> way.
              </Typography>
              <Typography>
                <b>Our goal</b> is to help you make <b>informed decisions</b>{" "}
                about your <b>investments</b>.
              </Typography>
            </div>
            <Image
              src={"/images/crypto-unveil.png"}
              alt={"Crypto Unveil Screenshot"}
              width={2000}
              height={1250}
              className="rounded-lg grayscale object-cover border border-gray-200"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw"
              quality={60}
              priority
            />
            <Button
              className="w-1/2 self-center"
              asChild
            >
              <Link
                href={"https://www.crypto-unveil.com/blog"}
                target="_blank"
              >
                Visit Crypto Unveil
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex flex-col text-center space-y-8">
          <Typography variant="h2">Other services</Typography>

          <div className="flex flex-col space-y-8 items-center">
            <div className="flex flex-col space-y-3">
              <Typography variant="h3">Client Craft</Typography>
              <Typography>
                Client Craft is an easy-to-use platform that allows you to get
                your own website up and running in no time.
              </Typography>
              <Typography>
                Combining in-house design and development with a user-friendly
                interface, we make it easy for you to create a website that
                reflects your brand.
              </Typography>
              <Typography>
                Our goal with this project is to help you get online quickly and
                easily, without the need for technical expertise.
              </Typography>
            </div>
            <Image
              src={"/images/client-craft.png"}
              alt={"Client Craft Screenshot"}
              width={2000}
              height={1250}
              className="rounded-lg object-cover grayscale border border-gray-200"
              sizes="(max-width: 768px) 80vw, (max-width: 1200px) 30vw"
              quality={60}
              priority
            />
            <Button
              className="w-1/2 self-center"
              asChild
            >
              <Link href={paths.contact}>Contact us about Client Craft</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
