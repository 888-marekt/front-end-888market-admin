import { loginUser } from "@/lib/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useLogin() {
  const queryClient = useQueryClient();

  const {
    mutate: login,
    isPending: isLogggingIn,
    isSuccess,
    isError,
    data,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
    },
    onError: (err: any) => {
      console.error("Login Error:", err?.message || "Unknown Error");
    },
  });

  return {
    login,
    isLogggingIn,
    isSuccess,
    isError,
    error,
    data,
  };
}
