"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { paths } from "@/paths";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export const TagSelect = ({
  tags,
  availableTags,
}: {
  tags?: string[];
  availableTags?: string[];
}) => {
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState(tags || []);

  useEffect(() => {
    if (!tags) return;
    // decode tags from URL
    const decodedTags = tags.map((tag) => decodeURIComponent(tag));
    setSelectedTags(decodedTags);
  }, [tags]);

  const handleTagChange = (tag: string) => {
    if (!availableTags) return;
    if (tag === "all") {
      setSelectedTags([]);
      router.push(paths.blog.list());
      return;
    }

    const newTags = selectedTags.includes(tag)
      ? selectedTags.filter((selectedTag) => selectedTag !== tag)
      : [...selectedTags, tag];

    setSelectedTags(newTags);

    router.push(paths.blog.list({ tags: newTags }));
  };

  return (
    <div className="flex flex-row space-x-5">
      <div className="flex flex-row items-center space-x-2">
        <Checkbox
          id={"all"}
          checked={selectedTags.includes("all") || selectedTags.length === 0}
          onCheckedChange={() => handleTagChange("all")}
        />
        <Label htmlFor={"all"}>All</Label>
        <Separator
          orientation="vertical"
          className="h-6"
        />
      </div>
      {availableTags?.map((availableTag, index) => (
        <div
          key={availableTag}
          className="flex flex-row items-center space-x-2"
        >
          <Checkbox
            id={availableTag}
            checked={selectedTags.includes(availableTag)}
            onCheckedChange={() => handleTagChange(availableTag)}
          />
          <Label htmlFor={availableTag}>{availableTag}</Label>
          {index !== availableTags.length - 1 && (
            <Separator
              orientation="vertical"
              className="h-6"
            />
          )}
        </div>
      ))}
    </div>
  );
};
