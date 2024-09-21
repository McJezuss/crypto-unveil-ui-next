import type { FC } from "react";

export type TypographyVariant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "p"
  | "large"
  | "small"
  | "muted";

interface TypographyProps {
  children:
    | string
    | string[]
    | JSX.Element
    | JSX.Element[]
    | (string | JSX.Element)[];
  variant?: TypographyVariant;
  className?: string;
}

export const Typography: FC<TypographyProps> = ({
  children,
  variant,
  className,
}) => {
  const globalClasses = `text-zinc-900 dark:text-white + ${className}`;

  switch (variant) {
    case "h1":
      return (
        <h1
          className={"font-bebas scroll-m-20 text-7xl lg:7xl" + globalClasses}
        >
          {children}
        </h1>
      );
    case "h2":
      return (
        <h2
          className={
            "font-bebas scroll-m-20 text-5xl first:mt-0" + globalClasses
          }
        >
          {children}
        </h2>
      );
    case "h3":
      return (
        <h3
          className={
            "font-bebas scroll-m-20 text-4xl lg:text-4xl" + globalClasses
          }
        >
          {children}
        </h3>
      );
    case "h4":
      return (
        <h4
          className={
            "font-bebas scroll-m-20 text-3xl lg:text-3xl" + globalClasses
          }
        >
          {children}
        </h4>
      );
    case "p":
      return (
        <p
          className={
            "font-avenir text-xl leading-7 [&:not(:first-child)]:mt-6" +
            globalClasses
          }
        >
          {children}
        </p>
      );
    case "large":
      return (
        <div className={"font-avenir text-2xl font-semibold" + globalClasses}>
          {children}
        </div>
      );
    case "small":
      return (
        <small
          className={
            "font-avenir text-base font-medium leading-none" + globalClasses
          }
        >
          {children}
        </small>
      );
    case "muted":
      return (
        <p
          className={
            "font-avenir text-base text-zinc-400 dark:text-zinc-500" +
            globalClasses
          }
        >
          {children}
        </p>
      );
    default:
      return (
        <Typography
          variant="p"
          className={className}
        >
          {children}
        </Typography>
      );
  }
};
