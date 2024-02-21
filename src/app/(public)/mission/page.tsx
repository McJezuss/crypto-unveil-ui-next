import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Mission | Crypto Unveil",
    description:
      "Driven by a vision to democratize blockchain knowledge in South Africa, our mission is to provide accessible, comprehensive blockchain education for all. We aim to empower individuals with the skills and understanding needed to navigate and succeed in the digital economy. Join us in building a future where blockchain technology is leveraged for growth, innovation, and opportunity for everyone.",
  };
};

export default function Mission() {
  return (
    <div className="flex flex-col space-y-20 justify-center items-center pb:10 lg:pt-10 w-full lg:w-4/5 m-auto">
      <Typography variant="h2">Our Mission</Typography>
      <div className="grid grid-cols-1 lg:grid-cols-2 text-center gap-10">
        <Card className="!bg-zinc-950/80 border-0">
          <CardContent className="pt-6 space-y-8">
            <Typography variant="h3">
              Empowering your blockchain journey
            </Typography>
            <Typography>
              Our mission is to build an extensive library of blockchain courses
              that cater to individuals at every level of expertise.
            </Typography>
            <Typography>
              If you&apos;re an aspiring trader, we&apos;ll provide you with the
              knowledge and tools you need to navigate the complex world of
              cryptocurrency. We will help you understand the intricacies of
              blockchain technology so you can make informed decisions and steer
              clear of common scams and less reputable projects.
            </Typography>
            <Typography>
              If you&apos;re a developer, we&apos;ll equip you with the skills
              and expertise you need to build decentralized applications, smart
              contracts, and blockchain protocols, and we will help you
              understand the underlying principles that drive blockchain
              technology.
            </Typography>
            <Typography>
              We believe blockchain technology is the future, and we are
              committed to providing you with free and reliable resources you
              need.
            </Typography>
          </CardContent>
        </Card>
        <Card className="!bg-zinc-950/80 border-0">
          <CardContent className="pt-5 space-y-8">
            <Typography variant="h3">
              Cultivating a vibrant community
            </Typography>
            <Typography>
              Beyond our courses, we are dedicated to fostering a thriving
              Discord community. We believe that the most valuable insights come
              from those who are a part of our journey.
            </Typography>
            <Typography>
              By joining our Discord community, you become an integral part of
              CryptoUnveil&apos;s evolution. We value your opinions, feedback,
              and ideas, and we actively seek to shape our products and
              offerings based on your needs.
            </Typography>
            <Typography>
              This community is not just about learning; it&apos;s about
              collaborating, sharing, and collectively building a brighter
              future in the blockchain space. Together, we can create a learning
              environment that continually evolves to meet your aspirations and
              expectations.
            </Typography>
            <Button className="w-full lg:w-1/2 lg:!mt-12">
              Join our Discord community
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
