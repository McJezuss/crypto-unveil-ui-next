"use client";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC } from "react";

interface MobileRouteItemProps {
  title: string;
  href: string;
}

export const MobileRouteItem: FC<MobileRouteItemProps> = ({ title, href }) => {
  const pathname = usePathname();

  return (
    <Button
      asChild
      className="w-full"
      variant={pathname === href ? "default" : "outline"}
    >
      <Link href={href}>{title}</Link>
    </Button>
  );
};
