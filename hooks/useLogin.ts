import { useMutation } from "@tanstack/react-query";
import { loginUser, LoginCredentials } from "@/lib/api/auth";

export const useLogin = () => {
  return useMutation<Error, LoginCredentials>({
    mutationFn: loginUser,
  });
};
