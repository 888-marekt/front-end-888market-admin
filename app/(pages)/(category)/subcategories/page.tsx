"use client";

import { Filter, MoreVertical, Plus, Search, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useEffect, useState } from "react";
import { useProducts } from "@/hooks/useProducts";
import { ProductProps } from "@/components/products/type";
import { useRouter } from "next/navigation";
import SubCategory from "@/components/categories/SubCategory";

export default function SubCategories() {
  const { products, isLoadingProducts } = useProducts();
  const [allCategories, setAllCategories] = useState([]);
  const router = useRouter();

  useEffect(() => {
    console.log(products);
    setAllCategories(products);
  }, [products?.length]);

  return (
    <main className="p-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold mb-1">Sub Categories</h2>
          <p className="text-gray-500">Manage your product sub categories.</p>
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700"
          onClick={() => router.push("/subcategory/new")}
        >
          <Plus className="mr-2 h-4 w-4" /> Create New
        </Button>
      </div>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between pb-2">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
              <input
                type="text"
                placeholder="Search categories..."
                className="pl-9 h-9 w-[250px] rounded-md border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="text-red-600 border-red-200"
            >
              <Trash2 size={16} className="mr-2" /> Delete
            </Button>
            <Button variant="outline" size="sm">
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="w-10 p-4">
                    <Checkbox />
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-gray-500">
                    Thumbnail
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-gray-500">
                    Category
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-gray-500">
                    Name
                  </th>
                  <th className="p-4 text-left font-medium text-sm text-gray-500">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody>
                {isLoadingProducts ? (
                  <tr>
                    <td className="px-4 py-10" colSpan={7}>
                      <div className="flex justify-center items-center w-full">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
                      </div>
                    </td>
                  </tr>
                ) : (
                  allCategories?.map((product: ProductProps) => (
                    <SubCategory
                      key={product.id}
                      subCategory={{
                        name: product.title,
                        imageUrl: product.imageUrl,
                        id: product.id,
                        // category: product.category,
                      }}
                    />
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
