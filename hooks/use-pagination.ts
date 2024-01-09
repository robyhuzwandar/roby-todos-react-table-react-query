import { PaginationState } from "@tanstack/react-table";
import * as React from "react";

const usePagination = () => {
  const [{ pageIndex, pageSize }, setPagination] =
    React.useState<PaginationState>({
      pageIndex: 0,
      pageSize: 10,
    });

  const fetchDataOptions: PaginationState = {
    pageIndex,
    pageSize,
  };

  const pagination: PaginationState = React.useMemo(
    () => ({
      pageIndex,
      pageSize,
    }),
    [pageIndex, pageSize]
  );

  return {
    fetchDataOptions,
    pagination,
    setPagination,
  };
};

export default usePagination;
