"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isTokenExpired } from "@/utils/token";
import { useAuthBootstrap } from "@/hooks/useAuthBootstrap";
import Loading from "./loading";

export default function Home() {
  const router = useRouter();
  const loading = useAuthBootstrap();

  if (loading) {
    <Loading />;
  }

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken && !isTokenExpired(accessToken)) {
      router.replace("/dashboard");
    } else {
      router.replace("/login");
    }
  }, [router]);

  return null;
}
