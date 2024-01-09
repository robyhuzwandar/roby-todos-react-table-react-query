"use client";

import React from "react";

import { columns } from "./columns";
import usePagination from "@/hooks/use-pagination";
import useQueryCustomer from "./use-query-customer";
import { DataTable } from "@/components/data-table";

export default function Customer() {
  const { pagination, fetchDataOptions, setPagination } = usePagination();

  const { data, isLoading } = useQueryCustomer(fetchDataOptions);

  if (isLoading) return <p>Loading...</p>;

  if (!data?.rows) {
    return <p>No data</p>;
  }

  return (
    <DataTable
      totalData={data?.pageCount ?? -1}
      columns={columns}
      data={data?.rows}
      pagination={pagination}
      setPagination={setPagination}
    />
  );
}
