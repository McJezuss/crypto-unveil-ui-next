import Image from "next/image";
import { FC } from "react";
import FullLogo from "@/../public/logos/full.webp";
import IconLogo from "@/../public/logos/icon.webp";

interface LogoProps {
  variant: "full" | "icon";
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export const Logo: FC<LogoProps> = ({
  variant,
  className,
  priority = true,
  sizes,
}) => {
  return (
    <Image
      src={variant === "full" ? FullLogo : IconLogo}
      alt="Crypto Unveil Logo"
      className={className}
      priority={priority}
      sizes={sizes}
      placeholder="blur"
      quality={60}
    />
  );
};
