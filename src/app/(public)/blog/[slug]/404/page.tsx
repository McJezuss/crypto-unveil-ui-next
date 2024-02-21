import { Logo } from "@/components/logos/logo";
import { Button } from "@/components/ui/button";
import { paths } from "@/paths";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function PostNotFound() {
  return (
    <div className="flex flex-col items-center max-w-6xl pt-40 pb-40 m-auto space-y-10">
      <Logo variant="horizontal" />
      <h1 className="text-4xl font-bold text-center">
        Sorry, we couldn&apos;t find that post.
      </h1>
      <Button
        asChild
        variant={"default"}
        className="text-xl font-avenir font-bold"
      >
        <Link href={paths.blog.index}>
          Go to featured posts <ChevronRight className="w-5 h-5 self-center" />
        </Link>
      </Button>
    </div>
  );
}
