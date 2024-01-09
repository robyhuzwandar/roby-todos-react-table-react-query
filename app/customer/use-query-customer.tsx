import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { queryCustomer } from "./query-customer";
import { PaginationState } from "@tanstack/react-table";

const useQueryCustomer = (fetchDataOptions: PaginationState) => {
  return useQuery({
    queryKey: ["data", fetchDataOptions],
    queryFn: () => queryCustomer(fetchDataOptions),
    placeholderData: keepPreviousData,
  });
};

export default useQueryCustomer;
