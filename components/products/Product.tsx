import { Checkbox } from "@radix-ui/react-checkbox";
import { MoreVertical } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { ProductProps } from "./type";
import { Badge } from "@/components/ui/badge";

interface ProductComponentProps {
  product: ProductProps;
  key: string;
}

export default function Product({ product }: ProductComponentProps) {
  const { imageUrl, title, category, formattedPrice, stock = 12 } = product;
  return (
    <tr className="border-b border-gray-100">
      <td className="p-4">
        <Checkbox />
      </td>
      <td className="p-4">
        <div className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image
              src={
                imageUrl ||
                "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80"
              }
              alt={title}
              fill
              className="object-cover"
            />
          </div>
          <span className="font-medium">{title}</span>
        </div>
      </td>
      <td className="p-4 text-sm">{category?.name}</td>
      <td className="p-4 text-sm font-medium">{formattedPrice?.formatted}</td>
      <td className="p-4 text-sm">{stock}</td>
      <td className="p-4">
        <Badge
          className={`${
            stock > 20
              ? "bg-green-100 text-green-600 hover:bg-green-100"
              : stock === 0
              ? "bg-red-100 text-red-600 hover:bg-red-100"
              : "bg-yellow-100 text-yellow-600 hover:bg-yellow-100"
          }`}
        >
          {stock > 20 ? "In stock" : stock === 0 ? "Out of stock" : "Low stock"}
        </Badge>
      </td>
      <td className="p-4">
        <Button variant="ghost" size="icon">
          <MoreVertical size={16} />
        </Button>
      </td>
    </tr>
  );
}
