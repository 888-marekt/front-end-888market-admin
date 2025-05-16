"use client";

import { useRouter } from "next/navigation";
import { isTokenExpired } from "@/utils/token";

export default function Home() {
  const router = useRouter();

  const accessToken = localStorage.getItem("accessToken");
  console.log("in page", accessToken && !isTokenExpired(accessToken));

  if (accessToken && !isTokenExpired(accessToken)) {
    router.replace("/dashboard");
  } else {
    router.replace("/login");
  }

  return null;
}
