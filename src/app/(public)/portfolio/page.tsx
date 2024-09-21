import { Typography } from "@/components/ui/typography";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: "Portfolio | De Cent",
    description:
      "Level up your business with blockchain technology. We offer blockchain development services, including smart contract development, NFTs, crypto onboarding, crypto offboarding, admin panels, and more. We also offer traditional web development services, including websites, web apps, and mobile apps. Visit our portfolio now!",
    metadataBase: new URL(process.env.S3_ENDPOINT || ""),
  };
};

export default function Portfolio() {
  return (
    <div className="container flex flex-col space-y-10 pb-20 lg:pt-10">
      <Typography variant="h3">Development Portfolio</Typography>
      <div className="flex flex-col space-y-3">
        <Typography variant="h4">NEAR Microbonds</Typography>
        <Typography>
          NEAR Microbonds is a decentralised finance (DeFi) project that allowed
          users to create and trade microbonds on the NEAR Protocol. The idea is
          that municipalities would issue microbonds to fund projects, and
          citizens would buy and trade these bonds to support their local
          communities using the NEAR blockchain.
        </Typography>
        <Typography>
          The project was funded by a grant from the NEAR Foundation and was
          completed in 2022. The project was built using the NEAR SDK, Assembly
          Script, and React.
        </Typography>
        <Typography>
          The project has since decided to migrate to Stellar, and you can
          follow the project here:{" "}
        </Typography>
        <Typography className="underline">
          <Link
            href="https://www.usfca.edu/law/school-life-careers/centers/center-law-tech-social-good/projects"
            target="_blank"
          >
            University of San Francisco School of Law - Blockchain Microbond
            Project
          </Link>
        </Typography>
      </div>

      <div className="flex flex-col space-y-3">
        <Typography variant="h4">Volume Token</Typography>
        <Typography>
          Volume Token was a decentralised gaming project where users were on a
          joint mission to travel to distant planets. The rocket had a small
          amount of fuel to start with, and users would trade the token to add
          fuel to the rocket.
        </Typography>
        <Typography>
          Once the rocket reached a planet, the users would receive a reward in
          the form of an NFT. The top contributors would also receive a portion
          of the total transaction fees collected during the mission.
        </Typography>
        <Typography>
          The project was built on the Ethereum blockchain using Solidity and
          React. The project was completed in 2021.
        </Typography>
        <Image
          src="/images/volume.png"
          alt="Volume Token"
          width={1600}
          height={920}
          className="rounded-lg border border-gray-200"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <Typography variant="h4">Wallet Relay</Typography>
        <Typography>
          Wallet Relay is a decentralised utility platform that allowed
          businesses to easily onboard and offboard customers to the blockchain.
          The platform provided a simple API that allowed businesses to create
          and manage wallets for their customers.
        </Typography>
        <Typography>
          This would allow easy onboarding of cryptocurrency to the platform,
          while working seamlessly with any existing systems. The project was
          built using Solidity, React, and Node.js. The project was completed in
          2023.
        </Typography>
        <Typography>You can read more about the project here: </Typography>
        <Typography className="underline">
          <Link
            href="https://www.walletrelay.com/"
            target="_blank"
          >
            Wallet Relay
          </Link>
        </Typography>
        <Image
          src="/images/wallet-relay.png"
          alt="Wallet Relay"
          width={1600}
          height={920}
          className="rounded-lg border border-gray-200"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <Typography variant="h4">Mentor Global Assessment Platform</Typography>
        <Typography>
          Mentor Global Assessment Platform is a traditional web development
          project that serves as an online assessment platform for Mentor
          Global. The platform allows users to take annual assessments and
          receive feedback on their performance.
        </Typography>
        <Typography>
          The project was custom built using React and Node.js. The project was
          completed in 2024.
        </Typography>
        <Typography>
          The platform is currently in use by Mentor Global and you can visit
          them here:{" "}
        </Typography>
        <Typography className="underline">
          <Link
            href="https://mentor-gc.com/"
            target="_blank"
          >
            Mentor Global Consultants
          </Link>
        </Typography>
      </div>

      <div className="flex flex-col space-y-3">
        <Typography variant="h4">Stockel Tattoos</Typography>
        <Typography>
          Stockel Tattoos is a traditional web development project that serves
          as a portfolio for a tattoo artist. The website was built on our
          in-house system called client craft. The front-end was built using
          Next.js and Tailwind CSS. The website was completed in 2023.
        </Typography>
        <Typography>
          The website is currently in use by Stockel Tattoos and you can visit
          them here:{" "}
        </Typography>
        <Typography className="underline">
          <Link
            href="https://www.stockeltattoos.co.za/"
            target="_blank"
          >
            Stockel Tattoos
          </Link>
        </Typography>
        <Image
          src="/images/stockel-tattoos.png"
          alt="Wallet Relay"
          width={1600}
          height={920}
          className="rounded-lg border border-gray-200"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <Typography variant="h4">Mile Klaasee Lifecoach</Typography>
        <Typography>
          Mile Klaasee Lifecoach is a traditional web development project that
          serves as an online portfolio for a life coach. The website was built
          on our in-house system called client craft. The front-end was built
          using Next.js and Tailwind CSS. The website was completed in 2024.
        </Typography>
        <Typography>
          The website is currently in use by Mile Klaasee Lifecoach and you can
          visit them here:{" "}
        </Typography>
        <Typography className="underline">
          <Link
            href="https://www.mileklaaseecoach.co.za/"
            target="_blank"
          >
            Mile Klaasee Lifecoach
          </Link>
        </Typography>
        <Image
          src="/images/mile-lifecoach.png"
          alt="Wallet Relay"
          width={1600}
          height={920}
          className="rounded-lg border border-gray-200"
        />
      </div>

      <div className="flex flex-col space-y-3">
        <Typography variant="h4">EduSynth AI</Typography>
        <Typography>
          EduSynth AI is an AI Tutor project that allows users to get help with
          their homework or coursework using AI. The project was built using
          ChatGPT, React, and Node.js. The project was completed in 2024.
        </Typography>
        <Typography>
          The website is currently in use by EduSynth AI and you can visit them
          here:{" "}
        </Typography>
        <Typography className="underline">
          <Link
            href="https://www.edusynth.org/"
            target="_blank"
          >
            EduSynth AI Tutor
          </Link>
        </Typography>
        <Image
          src="/images/edusynth.png"
          alt="Wallet Relay"
          width={1600}
          height={920}
          className="rounded-lg border border-gray-200"
        />
      </div>
    </div>
  );
}
