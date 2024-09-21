import { Logo } from "@/components/logo";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";

export const Footer = () => {
  return (
    <footer>
      <Separator className="w-full" />
      <div className="flex flex-row max-lg:flex-col justify-around max-lg:justify-center max-lg:items-center max-lg:space-y-5 p-5 font-avenir tracking-tight">
        {/* Logo and social media icons */}
        <div className="flex flex-row justify-center items-center w-full max-lg:w-full max-lg:flex-col max-lg:space-y-2">
          <Logo
            variant={"icon"}
            priority={false}
            className="max-w-[150px]"
            sizes="(max-width: 768px) 30vw, (max-width: 1200px) 10vw"
          />
          <div className="w-full lg:w-1/4 ml-10">
            <Typography variant="muted">
              Embark on a transformative journey into the world of blockchain
              and artificial intelligence. Harness the power of blockchain
              technology and artificial intelligence to level up your business.
            </Typography>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="flex flex-col items-center justify-center p-5 space-y-2">
        <Separator
          className="lg:hidden"
          orientation="horizontal"
        />
        <span className="text-sm text-center text-zinc-500">
          © {new Date().getUTCFullYear()} De Cent Pty Ltd. All rights reserved.
        </span>
      </div>
    </footer>
  );
};
