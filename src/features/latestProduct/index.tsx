import { latestProductMockData } from "@/mockdata";
import Image from "next/image";
import React, { useState } from "react";
import { HiHeart } from "react-icons/hi";
import { TbGardenCart } from "react-icons/tb";
import { ProductTypes } from "./utils";

export const LatestProduct = () => {
  const [productType, setSelectedProductType] = useState(
    ProductTypes.NEW_ARRIVAL
  );

  const handleProductTypeChange = (type: React.SetStateAction<string>) => {
    setSelectedProductType(type);
  };

  return (
    <div className="flex flex-col items-center w-full h-full justify-center">
      <p className="font-semibold text-3xl text-e1offNavyBlue m-9">
        Latest Product
      </p>
      <div className="flex gap-10 mb-6">
        {Object.values(ProductTypes).map((type) => (
          <div
            key={type}
            className={`cursor-pointer ${
              type === productType ? "text-e1pink" : "text-e1offNavyBlue"
            }`}
            onClick={() => handleProductTypeChange(type)}
          >
            {type}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-14 my-5 mt-7">
        {latestProductMockData.map((product) => (
          <div key={product.id} className="relative">
            <div className="border rounded-lg overflow-hidden shadow-md h-full">
              <Image
                className="object-cover bg-slate-50"
                src={product.thumbnail}
                alt="product-image"
                width={240}
                height={240}
              />
              <div className="absolute bottom-1 right-0 gap-4 flex p-4">
                <TbGardenCart
                  size={24}
                  className="text-e1offNavyBlue hover:text-e1pink cursor-pointer"
                />
                <HiHeart
                  size={24}
                  className="text-e1offNavyBlue hover:text-e1pink cursor-pointer"
                />
              </div>
              <div className="p-4">
                <h3 className="text-e1offNavyBlue font-semibold">
                  {product.name}
                </h3>
                <p className="text-gray-400">{product.code}</p>
                <p className="text-gray-400">{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
