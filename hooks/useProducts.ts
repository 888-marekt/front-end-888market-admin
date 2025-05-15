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
    data,
    error: errProducts,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  const products = data?.results.map((product: any) => {
    const keys = Object.keys(product);
    const newProduct: { [key: string]: any } = {};
    keys.forEach((key) => {
      const camelCasedKey = key
        .split("_")
        .map((k: string, index) => {
          let newKey = k;
          if (index !== 0) {
            newKey = k.charAt(0).toUpperCase() + k.slice(1);
          }
          return newKey;
        })
        .join("");
      newProduct[camelCasedKey] = product[key];
    });
    return newProduct;
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
