"use client";

import DeleteConfirmation from "@/components/delete-confirmation";
import useMutationDeleteProduct from "./use-mutation-delete-product";
import { useQueryClient } from "@tanstack/react-query";
import { CellContext } from "@tanstack/react-table";
import { Product } from "./product-types";

const ActionCell = ({ row }: CellContext<Product, unknown>) => {
  const queryClient = useQueryClient();
  const { mutateAsync } = useMutationDeleteProduct();

  const handleDeleteProduct = async () => {
    await mutateAsync(row.original.id);
    queryClient.prefetchQuery({
      queryKey: ["products"],
    });
  };

  return <DeleteConfirmation onDelete={handleDeleteProduct} />;
};

export default ActionCell;
