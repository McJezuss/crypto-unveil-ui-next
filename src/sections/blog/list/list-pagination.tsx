import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { paths } from "@/paths";
import { FC } from "react";

interface BlogListPaginationProps {
  page: number;
  numberOfPages: number;
  tags?: string[];
}

export const BlogListPagination: FC<BlogListPaginationProps> = ({
  page,
  numberOfPages,
  tags,
}) => {
  page = Number(page);

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`${paths.blog.list({ page: page - 1, tags })}`}
            />
          </PaginationItem>
        )}
        {page > 1 && (
          <PaginationItem>
            <PaginationLink
              href={`${paths.blog.list({ page: page - 1, tags })}`}
            >
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            href={`${paths.blog.list({ page: page, tags })}`}
            isActive={true}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        {numberOfPages > page && (
          <PaginationItem>
            <PaginationLink
              href={`${paths.blog.list({ page: page + 1, tags })}`}
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        )}
        {numberOfPages > page + 1 && (
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
        )}
        {numberOfPages > page && (
          <PaginationItem>
            <PaginationNext
              href={`${paths.blog.list({ page: page + 1, tags })}`}
            />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
