import {
  Bell,
  ChevronDown,
  Filter,
  MoreVertical,
  Plus,
  Search,
  Trash2,
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

export default function Products() {
  const products = [
    {
      id: 1,
      name: "Nike Air Max 270",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      category: "Footwear",
      price: "$120.00",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Adidas Ultraboost",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      category: "Footwear",
      price: "$180.00",
      stock: 32,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Puma RS-X",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      category: "Footwear",
      price: "$95.00",
      stock: 18,
      status: "Low Stock",
    },
    {
      id: 4,
      name: "New Balance 990",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      category: "Footwear",
      price: "$175.00",
      stock: 27,
      status: "In Stock",
    },
    {
      id: 5,
      name: "Converse Chuck 70",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      category: "Footwear",
      price: "$85.00",
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 6,
      name: "Vans Old Skool",
      image:
        "https://images.unsplash.com/photo-1608231387042-66d1773070a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=320&q=80",
      category: "Footwear",
      price: "$65.00",
      stock: 41,
      status: "In Stock",
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "In Stock":
        return "bg-green-100 text-green-600 hover:bg-green-100";
      case "Low Stock":
        return "bg-yellow-100 text-yellow-600 hover:bg-yellow-100";
      case "Out of Stock":
        return "bg-red-100 text-red-600 hover:bg-red-100";
      default:
        return "bg-gray-100 text-gray-600 hover:bg-gray-100";
    }
  };

  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between p-4 border-b border-gray-100">
        <h1 className="text-xl font-semibold">Products</h1>

        <div className="flex items-center gap-4">
          <button className="p-2 text-gray-500 hover:text-gray-700">
            <Search size={20} />
          </button>
          <button className="p-2 text-gray-500 hover:text-gray-700 relative">
            <Bell size={20} />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          </button>
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
            <ChevronDown size={16} className="text-gray-500" />
          </div>
        </div>
      </header>

      {/* Products Content */}
      <main className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-2xl font-bold mb-1">Products</h2>
            <p className="text-gray-500">Manage your product inventory</p>
          </div>
          <Button className="bg-blue-600 hover:bg-blue-700">
            <Plus className="mr-2 h-4 w-4" /> Add Product
          </Button>
        </div>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter size={16} />
                Filter
              </Button>
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Search products..."
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
                      Product
                    </th>
                    <th className="p-4 text-left font-medium text-sm text-gray-500">
                      Category
                    </th>
                    <th className="p-4 text-left font-medium text-sm text-gray-500">
                      Price
                    </th>
                    <th className="p-4 text-left font-medium text-sm text-gray-500">
                      Stock
                    </th>
                    <th className="p-4 text-left font-medium text-sm text-gray-500">
                      Status
                    </th>
                    <th className="p-4 text-left font-medium text-sm text-gray-500">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product) => (
                    <tr key={product.id} className="border-b border-gray-100">
                      <td className="p-4">
                        <Checkbox />
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="relative h-10 w-10 overflow-hidden rounded-md">
                            <Image
                              src={product.image || "/placeholder.svg"}
                              alt={product.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <span className="font-medium">{product.name}</span>
                        </div>
                      </td>
                      <td className="p-4 text-sm">{product.category}</td>
                      <td className="p-4 text-sm font-medium">
                        {product.price}
                      </td>
                      <td className="p-4 text-sm">{product.stock}</td>
                      <td className="p-4">
                        <Badge className={getStatusColor(product.status)}>
                          {product.status}
                        </Badge>
                      </td>
                      <td className="p-4">
                        <Button variant="ghost" size="icon">
                          <MoreVertical size={16} />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}
