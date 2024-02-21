import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Typography } from "@/components/ui/typography";
import { paths } from "@/paths";
import Link from "next/link";

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
          <div className="flex flex-col justify-center space-y-2 max-lg:flex-row max-lg:space-y-0 max-lg:space-x-2">
            <Button
              asChild
              className="rounded-full h-8 w-8 p-0"
            >
              <Link
                aria-label="Instagram profile link"
                href={
                  "https://www.instagram.com/stockel.tattoos?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
            </Button>

            <Button
              asChild
              className="rounded-full h-8 w-8 p-0"
            >
              <Link
                href={"https://www.facebook.com/humblebtattoos/"}
                aria-label="Facebook profile link"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mx-auto h-full w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                </svg>
              </Link>
            </Button>
          </div>
          <div className="w-full lg:w-1/4 ml-10">
            <Typography variant="muted">
              Embark on a transformative journey into the world of blockchain.
              Learn to harness the power of blockchain technology for financial
              freedoom and software development.
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
          © {new Date().getUTCFullYear()} Crypto Unveil. All rights reserved.
        </span>
      </div>
    </footer>
  );
};