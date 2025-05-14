import { getProducts, postProduct } from "@/lib/api/products";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export function useProducts() {
  const queryClient = useQueryClient();

  const {
    mutate: createProduct,
    isPending: isCreatingProduct,
    isSuccess,
    isError,
    error,
  } = useMutation({
    mutationFn: postProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError: (err: any) => {
      console.error("Login Error:", err?.message || "Unknown Error");
    },
  });

  const {
    isLoading: isLoadingProducts,
    data: products,
    error: errProducts,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getProducts,
  });

  return {
    createProduct,
    isCreatingProduct,
    isLoadingProducts,
    products,
    isSuccess,
    isError,
    error,
    errProducts,
  };
}
