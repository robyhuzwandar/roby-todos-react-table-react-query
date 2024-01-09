import { useMutation } from "@tanstack/react-query";

const deleteProducts = async (id: number): Promise<unknown> => {
  const response = await fetch(`https://dummyjson.com/products/${id}`, {
    method: "DELETE",
  });

  const data = await response.json();
  return data;
};

const useMutationDeleteProduct = () =>
  useMutation({
    mutationFn: deleteProducts,
  });

export default useMutationDeleteProduct;
