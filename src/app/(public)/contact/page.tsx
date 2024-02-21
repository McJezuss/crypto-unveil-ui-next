import { LogoDiscord } from "@/components/logo/logo-discord";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="flex flex-col space-y-20 justify-center items-center lg:pt-10">
      <Typography variant="h2">Contact Us</Typography>
      <Card className="!bg-zinc-950/80 border-0 w-full lg:w-1/3 text-center">
        <CardContent className="pt-6 space-y-8">
          <div className="space-y-3">
            <Typography variant="h3">Community Support</Typography>
            <Typography>Join the community here:</Typography>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <LogoDiscord className="w-6 h-6" />
              <Typography
                className="lg:hidden"
                variant="small"
              >
                (Preferred)
              </Typography>
              <Button
                variant={"link"}
                asChild
              >
                <Link href={"https://discord.gg/PaDMFJjKKk"}>
                  <Typography>https://discord.gg/PaDMFJjKKk</Typography>
                </Link>
              </Button>
              <Typography
                className="max-lg:hidden"
                variant="small"
              >
                (Preferred)
              </Typography>
            </div>
          </div>

          <div className="space-y-3">
            <Typography variant="h3">Support Team</Typography>
            <Typography>Reach our support team here:</Typography>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <LogoDiscord className="w-6 h-6" />
              <Typography
                className="lg:hidden"
                variant="small"
              >
                (Preferred)
              </Typography>
              <Button
                variant={"link"}
                asChild
              >
                <Link
                  href={"https://discord.gg/PaDMFJjKKk"}
                  target="_blank"
                >
                  <Typography>https://discord.gg/PaDMFJjKKk</Typography>
                </Link>
              </Button>
              <Typography
                className="max-lg:hidden"
                variant="small"
              >
                (Preferred)
              </Typography>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Mail className="w-6 h-6" />
              <Button
                variant={"link"}
                asChild
              >
                <Link
                  href={"mailto:contact@crypto-unveil.com"}
                  target="_blank"
                >
                  <Typography>contact@crypto-unveil.com</Typography>
                </Link>
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              <Button
                variant={"link"}
                asChild
              >
                <Link
                  href={"https://www.instagram.com/cryptounveil/"}
                  target="_blank"
                >
                  <Typography className="max-lg:hidden">
                    https://www.instagram.com/cryptounveil/
                  </Typography>
                  <Typography className="lg:hidden">
                    https://www.instagram.com/cr...
                  </Typography>
                </Link>
              </Button>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Linkedin className="w-6 h-6" />
              <Button
                variant={"link"}
                asChild
              >
                <Link
                  href={"https://www.linkedin.com/company/crypto-unveil-edu"}
                  target="_blank"
                >
                  <Typography className="max-lg:hidden">
                    https://www.linkedin.com/company/crypto-unveil-edu
                  </Typography>
                  <Typography className="lg:hidden">
                    https://www.linkedin.com/comp...
                  </Typography>
                </Link>
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
