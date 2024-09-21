import { paths } from "@/paths";
import Link from "next/link";
import { MobileDrawer } from "./mobile-drawer";
import { RouteItem } from "./route-item";
import { Logo } from "@/components/logo";

export const Navbar = () => {
  return (
    <nav className="sticky top-0 px-4 py-4 flex max-lg:justify-between items-center bg-zinc-900 backdrop-filter backdrop-blur-md bg-opacity-20 z-50">
      <Link href={paths.home}>
        <Logo
          variant={"icon"}
          className="max-w-[50px]"
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 30vw, 10vw"
        />
      </Link>

      <MobileDrawer />

      <div className="hidden w-full lg:block lg:w-auto ml-10">
        <ul className="lg:flex flex lg:items-center lg:space-x-10">
          <RouteItem
            title={"Home"}
            href={paths.home}
          />

          <RouteItem
            title={"Portfolio"}
            href={paths.portfolio}
          />

          <RouteItem
            title={"Contact"}
            href={paths.contact}
          />

          <RouteItem
            title={"Blog"}
            href={paths.blog.index}
          />
        </ul>
      </div>
    </nav>
  );
};
