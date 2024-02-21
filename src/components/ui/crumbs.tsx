import { ChevronRight } from "lucide-react";
import { FC } from "react";
import { Button } from "./button";
import Link from "next/link";

interface Crumb {
  name: string;
  href: string;
}

export interface CrumbsProps {
  crumbs: Crumb[];
}

const Crumbs: FC<CrumbsProps> = ({ crumbs }) => {
  return (
    <div className="flex flex-row max-lg:flex-col max-lg:space-x-0 max-lg:space-y-2 space-x-2 pb-5">
      {crumbs.map((crumb, index) => (
        <div
          key={index}
          className="flex flex-row space-x-1"
        >
          <ChevronRight
            className={`w-5 h-5 self-center ${
              index === 0 && "lg:hidden"
            } text-zinc-50`}
          />
          <Button
            disabled={index === crumbs.length - 1}
            variant={"link"}
            asChild={index !== crumbs.length - 1}
            className="text-zinc-50 hover:text-zinc-50 text-lg"
          >
            <Link href={crumb.href}>{crumb.name}</Link>
          </Button>
        </div>
      ))}
    </div>
  );
};

export { Crumbs };
