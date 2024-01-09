import { keepPreviousData, useQuery } from "@tanstack/react-query";
import { ProductResponse } from "./product-types";

interface QueryProductsParams {
  pageSize?: number;
  skip: number;
}

export const queryProducts = async ({
  pageSize,
  skip,
}: QueryProductsParams): Promise<ProductResponse> => {
  const url = `https://dummyjson.com/products?limit=${pageSize}&skip=${skip}&select=title,price,isDeleted`;

  const response = await fetch(url);
  return await response.json();
};

const useQueryProducts = (params: QueryProductsParams) => {
  return useQuery({
    queryKey: ["products", params],
    queryFn: () => queryProducts(params),
    placeholderData: keepPreviousData,
  });
};

export default useQueryProducts;
