import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <div className="container max-w-3xl flex flex-col space-y-20 justify-center items-center text-center lg:pt-10">
      <Typography variant="h2">Contact Us</Typography>
      <Typography>
        We would love to hear from you! If you have any questions about our
        services or would like to get in touch with us for any other reason,
        please feel free to reach out using the contact details below.
      </Typography>
      <Card className="border w-full text-center">
        <CardContent className="pt-6 space-y-8">
          <div className="space-y-3">
            <Typography variant="h3">Our contact details</Typography>
            <div className="flex flex-col lg:flex-row items-center justify-center">
              <Mail className="w-6 h-6" />
              <Button
                variant={"link"}
                asChild
              >
                <Link
                  href={"mailto:tklaasee@gmail.com"}
                  target="_blank"
                >
                  <Typography>tklaasee@gmail.com (preferred)</Typography>
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
                  href={"https://www.linkedin.com/company/de-cent-pty-ltd"}
                  target="_blank"
                >
                  <Typography className="max-lg:hidden">
                    https://www.linkedin.com/company/de-cent-pty-ltd
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
