"use client";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, useMemo } from "react";

interface RouteItemProps {
  title: string;
  href: string;
}

export const RouteItem: FC<RouteItemProps> = ({ title, href }) => {
  const pathname = usePathname();
  const isActive = useMemo(() => {
    return pathname === href;
  }, [pathname, href]);

  return (
    <li>
      <Link
        className={`group relative`}
        href={href}
      >
        <Typography variant="h4">{title}</Typography>
        <span
          className={`ease absolute bottom-0 left-0 h-0 w-0 border-b-2 border-white transition-all duration-200 group-hover:w-full ${
            isActive ? "w-full" : ""
          }`}
        ></span>
      </Link>
    </li>
  );
};
