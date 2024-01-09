"use client";

import { DataTable } from "@/components/data-table";
import useQueryProducts from "./use-query-products";
import { columns } from "./columns";
import usePagination from "@/hooks/use-pagination";

export default function TodosPages() {
  const { pagination, fetchDataOptions, setPagination } = usePagination();

  const skip = fetchDataOptions.pageIndex * fetchDataOptions.pageSize;

  const { data, isLoading } = useQueryProducts({
    skip,
    pageSize: fetchDataOptions.pageSize,
  });

  const productList = data?.products;

  if (isLoading) return <p>Loading...</p>;

  if (!productList) {
    return <p>No data</p>;
  }

  return (
    <DataTable
      totalData={data.total}
      columns={columns}
      data={productList}
      pagination={pagination}
      setPagination={setPagination}
    />
  );
}
