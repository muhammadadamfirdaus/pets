import React from "react";
import Image from "next/image";

export default function ProductFeaturedCard({ productFeatured }) {
  return (
    <div className="card p-2 rounded-xl mr-1 h-full">
      <div className="max-h-[254px] overflow-hidden rounded-xl">
        <Image src={productFeatured.image} className={`w-full`} width={264} height={264} alt={productFeatured.productName} priority />
      </div>
      <div className="p-1">
        <h1 className="font-bold text-sm mt-2">{productFeatured.productName}</h1>
        <div className="mt-1">
          <div className="flex mb-1">
            <span className="font-medium text-xs text-slate-500 mr-1">Product: </span>
            <span className="font-bold text-xs text-slate-500 capitalize">{productFeatured.productCategory}</span>
          </div>
          <div className="flex">
            {productFeatured.size.length && (
              <>
                <span className="font-medium text-xs text-slate-500 mr-1">Size: </span>
                <span className="font-bold text-xs text-slate-500">{productFeatured.size}</span>
              </>
            )}
          </div>
        </div>
        <div className="flex mt-2">
          <span className="font-bold text-base mr-1">{productFeatured.price}</span>
          <span className="font-bold text-base">{productFeatured.currency}</span>
        </div>
        {productFeatured.bonus && (
          <div className="flex mt-2 bg-[#FCEED5] px-2 py-1">
            <div className="w-[12px] h-[12px]">
              <Image src="./icons/present.svg" width={12} height={12} className="w-full h-auto" alt="present" />
            </div>
            <span className="text-[10px] capitalize ml-2 lg:text-xs">{productFeatured.bonusContent}</span>
          </div>
        )}
      </div>
    </div>
  );
}
