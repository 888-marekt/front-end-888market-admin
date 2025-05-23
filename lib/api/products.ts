// {
//   "title": "string",
//   "description": "string",
//   "price": "string",
//   "currency": "string",
//   "category": {
//     "name": "string",
//     "parent": 0
//   },
//   "category_id": 0,
//   "city": {
//     "name": "string",
//     "region": "string"
//   },
//   "city_id": 0
// }

import { refreshToken } from "./auth";

interface Product {
  title: string;
  description: string;
  price: string;
  currency: string;
  category: { name: string; parent: number };
  categoryId: number;
  city: { name: string; region: string };
  cityId: number;
}

const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
export const getProducts = async () => {
  const accessToken = localStorage.getItem("accessToken");

  const res = await fetch(`${baseUrl}/product/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`, // Add Bearer Token here
    },
  });
  console.log(res.ok);
  console.log(res.status);

  if (res.status === 401) {
    console.log("access token expired.");
    await refreshToken();
    const accessToken = localStorage.getItem("accessToken");
    const res = await fetch(`${baseUrl}/product/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`, // Add Bearer Token here
      },
    });
    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to fetch products");
    }
    return res.json();
  }
  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to fetch products");
  }
  return res.json();
};

export const postProduct = async (product: Product) => {
  const accessToken = localStorage.getItem("accessToken");

  const res = await fetch(`${baseUrl}/product/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`, // Add Bearer Token here
    },
    body: JSON.stringify(product),
  });

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error.message || "Failed to create product");
  }

  return res.json();
};
