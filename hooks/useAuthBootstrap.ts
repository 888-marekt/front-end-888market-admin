"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { isTokenExpired } from "@/utils/token";

export function useAuthBootstrap() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");

    const refreshAccessToken = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/login/refresh/`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ refresh: refreshToken }),
          }
        );

        if (!res.ok) throw new Error("Refresh failed");

        const data = await res.json();
        localStorage.setItem("accessToken", data.access);
        localStorage.setItem("refreshToken", data.refresh);
      } catch {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    if (!accessToken && !refreshToken) {
      router.push("/login");
      setLoading(false);
    } else if (accessToken && isTokenExpired(accessToken)) {
      if (refreshToken && !isTokenExpired(refreshToken)) {
        refreshAccessToken();
      } else {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        router.push("/login");
        setLoading(false);
      }
    } else {
      // Token is valid
      setLoading(false);
    }
  }, [router]);

  return loading;
}
