"use client";

import { useRef, useState } from "react";
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

export default function SubCategoryForm() {
  const thumbnail = useRef<HTMLInputElement>(null);
  const onOpenThumbnail = () => {
    if (thumbnail.current) {
      thumbnail.current.click();
    }
  };

  return (
    <div className="max-w-5xl p-6 bg-white">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-4">
          <Link
            href={"/categories"}
            className="size-10 rounded-full hover:bg-blue-100 grid place-items-center"
          >
            <ArrowLeft className="h-5 w-5 text-gray-700" />
          </Link>
          <div className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5 text-gray-700" />
            <h1 className="text-xl font-medium text-gray-700">
              Add New Category
            </h1>
          </div>
        </div>
        <div className="flex gap-4">
          <Button className="gap-2 rounded-full bg-blue-200 text-blue-800 hover:bg-blue-300">
            <Check className="h-5 w-5" />
            Add Category
          </Button>
        </div>
      </div>

      <div>
        <div className="max-w-5xl space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h2 className="text-lg font-medium mb-4">Category Information</h2>
            <div className="space-y-4">
              <div>
                <Label htmlFor="productName" className="block mb-2">
                  Name
                </Label>
                <Input
                  id="productName"
                  defaultValue="Electronics"
                  className="bg-gray-100 border-0"
                />
              </div>
              <div>
                <Label htmlFor="productDescription" className="block mb-2">
                  Thumbnail
                </Label>
                <div className="flex items-center gap-4">
                  <Image
                    src="https://w7.pngwing.com/pngs/454/1021/png-transparent-consumer-electronics-gadget-advanced-electronics-electronic-component-others-electronics-laptop-electronic-device-thumbnail.png"
                    alt="Thumbnail"
                    width={200}
                    height={200}
                    className="rounded-lg"
                  />
                  <Button
                    variant="outline"
                    className="gap-2 rounded-full"
                    onClick={onOpenThumbnail}
                  >
                    <Plus className="h-5 w-5" />
                    Upload Thumbnail
                  </Button>
                  <input hidden type="file" accept="image/*" ref={thumbnail} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
