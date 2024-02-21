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
}

export const BlogListPagination: FC<BlogListPaginationProps> = ({
  page,
  numberOfPages,
}) => {
  page = Number(page);

  return (
    <Pagination>
      <PaginationContent>
        {page > 1 && (
          <PaginationItem>
            <PaginationPrevious
              href={`${paths.blog.list({ page: page - 1 })}`}
            />
          </PaginationItem>
        )}
        {page > 1 && (
          <PaginationItem>
            <PaginationLink href={`${paths.blog.list({ page: page - 1 })}`}>
              {page - 1}
            </PaginationLink>
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink
            href={`${paths.blog.list({ page: page })}`}
            isActive={true}
          >
            {page}
          </PaginationLink>
        </PaginationItem>
        {numberOfPages > page && (
          <PaginationItem>
            <PaginationLink href={`${paths.blog.list({ page: page + 1 })}`}>
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
            <PaginationNext href={`${paths.blog.list({ page: page + 1 })}`} />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
};
