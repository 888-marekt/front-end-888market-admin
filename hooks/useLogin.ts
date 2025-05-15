"use client";
import { loginUser } from "@/lib/api/auth";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const {
    mutate: login,
    isPending: isLogggingIn,
    isSuccess,
    isError,
    data,
    error,
  } = useMutation({
    mutationFn: loginUser,
    onSuccess: (dataSuccess) => {
      localStorage.setItem("accessToken", dataSuccess.access);
      localStorage.setItem("refreshToken", dataSuccess.refresh);
      queryClient.invalidateQueries({ queryKey: ["login"] });
      router.replace("/dashboard");
      toast.success("Loged in successfully");
    },
    onError: (err: any) => {
      toast.error("Credentials are incorrect");
      console.log(err.message);
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
