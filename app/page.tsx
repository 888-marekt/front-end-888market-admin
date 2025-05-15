"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { isTokenExpired } from "@/utils/token";
import { useAuthBootstrap } from "@/hooks/useAuthBootstrap";
import Loading from "./loading";

export default function Home() {
  const router = useRouter();

  const accessToken = localStorage.getItem("accessToken");
  console.log("in page", accessToken && !isTokenExpired(accessToken));

  if (accessToken && !isTokenExpired(accessToken)) {
    router.replace("/dashboard");
  } else {
    router.replace("/login");
  }
  // useEffect(() => {
  // }, [router]);

  return null;
}
