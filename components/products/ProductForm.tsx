"use client";

import { useState } from "react";
import { ArrowLeft, Check, Plus, Save, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

export default function ProductForm() {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedGender, setSelectedGender] = useState("Woman");

  const sizes = ["XS", "S", "M", "XL", "XXL"];
  const genders = ["Men", "Woman", "Unisex"];

  return (
    <div className="max-w-7xl p-6 bg-white">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href={"/products"}
            className="size-10 rounded-full hover:bg-blue-100 grid place-items-center"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gray-700" />
            <h1 className="text-xl font-medium text-gray-700">
              Add New Product
            </h1>
          </div>
        </div>
        <div className="flex gap-4">
          <Button variant="outline" className="gap-2 rounded-full">
            <Save className="h-5 w-5" />
            Save Draft
          </Button>
          <Button className="gap-2 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300">
            <Check className="h-5 w-5" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">General Information</h2>

            <div className="space-y-4">
              <div>
                <Label htmlFor="productName" className="block mb-2">
                  Product Name
                </Label>
                <Input
                  id="productName"
                  defaultValue="Puffer Jacket With Pocket Detail"
                  className="bg-gray-100 border-0"
                />
              </div>

              <div>
                <Label htmlFor="productDescription" className="block mb-2">
                  Product Description
                </Label>
                <Textarea
                  id="productDescription"
                  className="bg-gray-100 border-0 min-h-[120px]"
                  defaultValue="Cropped puffer jacket made of technical fabric. High neck and long sleeves. Flap pocket at the chest and in-seam side pockets at the hip. Inside pocket detail. Hem with elastic interior. Zip-up front."
                />
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Pricing And Stock</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label htmlFor="basePrice" className="block mb-2">
                  Price
                </Label>
                <Input
                  id="basePrice"
                  defaultValue={47}
                  className="bg-gray-100 border-0"
                  type="number"
                />
              </div>

              <div>
                <Label htmlFor="stock" className="block mb-2">
                  Currency
                </Label>
                <Input
                  id="stock"
                  defaultValue={"USD"}
                  className="bg-gray-100 border-0"
                  type="string"
                />
              </div>

              <div>
                <Label htmlFor="discount" className="block mb-2">
                  Stock
                </Label>
                <Input
                  id="discount"
                  defaultValue={300}
                  type="number"
                  className="bg-gray-100 border-0"
                />
              </div>

              <div>
                <Label htmlFor="discountType" className="block mb-2">
                  City
                </Label>
                <Input
                  id="stock"
                  defaultValue={"UAE"}
                  className="bg-gray-100 border-0"
                  type="string"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Upload Img</h2>
            <div className="bg-white rounded-lg p-4 mb-4">
              <Image
                width={200}
                height={200}
                src="https://s3.amazonaws.com/images.sportsstore.it/AI23---nike---FB7368-450.JPG"
                alt="Blue puffer jacket"
                className="object-contain"
              />
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2">
              <div className="border border-blue-200 rounded-lg p-2 min-w-[80px] h-[80px] flex items-center justify-center">
                <Image
                  width={40}
                  height={40}
                  src="https://nobis.com/cdn/shop/files/Nobis-Tempus-Cire-TechnicalTaffeta-Black-FL-Front-Shadow.png?v=1726064510&width=1445"
                  alt="Thumbnail 1"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="border border-gray-200 rounded-lg p-2 min-w-[80px] h-[80px] flex items-center justify-center">
                <Image
                  width={40}
                  height={40}
                  src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Thumbnail 2"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="border border-gray-200 rounded-lg p-2 min-w-[80px] h-[80px] flex items-center justify-center">
                <Image
                  width={40}
                  height={40}
                  src="https://images.unsplash.com/photo-1548883354-94bcfe321cbb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80"
                  alt="Thumbnail 3"
                  className="w-full h-full object-contain"
                />
              </div>
              <button className="border border-gray-200 rounded-lg p-2 min-w-[80px] h-[80px] flex items-center justify-center bg-gray-50">
                <Plus className="h-6 w-6 text-gray-400" />
              </button>
            </div>
          </div>

          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Category</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="productCategory" className="block mb-2">
                  Product Category
                </Label>
                <Select defaultValue="jacket">
                  <SelectTrigger className="bg-gray-100 border-0">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jacket">Jacket</SelectItem>
                    <SelectItem value="pants">Pants</SelectItem>
                    <SelectItem value="shirts">Shirts</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="w-full gap-2 bg-blue-200 text-blue-800 hover:bg-blue-300">
                Add Category
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
