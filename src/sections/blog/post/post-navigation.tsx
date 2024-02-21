"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { HeadingData, parseHeadings } from "@/lib/blog-utils";
import { useEffect, useState } from "react";

export const PostNavigation = () => {
  const [headingData, setHeadingData] = useState<HeadingData[] | undefined>(
    undefined
  );

  useEffect(() => {
    if (headingData) return;

    const headings = document
      .getElementById("course-content")
      ?.querySelectorAll("h2, h3");
    if (!headings) return;

    const extractedData = parseHeadings(headings);

    setHeadingData(extractedData);
  }, [headingData]);

  const handleScroll = (id: string) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const topPosition = targetElement.offsetTop - 80;
      window.scrollTo({ top: topPosition, behavior: "smooth" });
    }
  };

  return (
    <div className="fixed bottom-0 left-0 w-full flex flex-row bg-zinc-950 border-t border-zinc-950 dark:border-zinc-50 p-3">
      <Select onValueChange={(val) => handleScroll(val)}>
        <SelectTrigger className="w-full lg:w-1/4">
          <SelectValue placeholder="Table of Contents" />
        </SelectTrigger>
        <SelectContent>
          {headingData?.map((heading) => (
            <SelectItem
              key={heading.id}
              value={heading.id}
            >
              {heading.text}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};
