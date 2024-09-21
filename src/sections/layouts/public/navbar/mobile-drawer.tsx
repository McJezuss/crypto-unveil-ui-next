"use client";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { paths } from "@/paths";
import { MobileRouteItem } from "./mobile-route-item";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export function MobileDrawer() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <Drawer
      open={open}
      onOpenChange={setOpen}
    >
      <DrawerTrigger asChild>
        <Button
          className="lg:hidden"
          variant={"outline"}
          size={"icon"}
          aria-label="Menu Button"
        >
          <Menu
            size={20}
            className="text-white"
          />
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>Where to?</DrawerTitle>
            <DrawerDescription>Select a page to navigate to</DrawerDescription>
          </DrawerHeader>
          <div className="p-4 pb-0 space-y-4">
            <MobileRouteItem
              title={"Home"}
              href={paths.home}
            />
            <MobileRouteItem
              title={"Portfolio"}
              href={paths.portfolio}
            />
            <MobileRouteItem
              title={"Contact"}
              href={paths.contact}
            />
            <MobileRouteItem
              title={"Blog"}
              href={paths.blog.index}
            />
            <div className="mt-3 h-[60px]"></div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
