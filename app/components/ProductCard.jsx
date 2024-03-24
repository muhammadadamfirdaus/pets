import React from "react";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <div className="card p-2 rounded-xl mr-1">
      <div className="max-h-[254px] overflow-hidden rounded-xl">
        <Image src={product.image} className={`w-full`} width={264} height={264} alt={product.productName} priority />
      </div>
      <div className="p-1">
        <h1 className="font-bold text-sm mt-2">
          {product.productCategory}
          <span> - </span>
          {product.productName}
        </h1>
        <div className="mt-1">
          <div className="flex mb-1">
            <span className="font-medium text-xs text-slate-500 mr-1">Gene: </span>
            <span className="font-bold text-xs text-slate-500 capitalize">{product.gender}</span>
          </div>
          <div className="flex">
            <span className="font-medium text-xs text-slate-500 mr-1">Age: </span>
            <span className="font-bold text-xs text-slate-500">{product.age}</span>
          </div>
        </div>
        <div className="flex mt-2">
          <span className="font-bold text-base mr-1">{product.price}</span>
          <span className="font-bold text-base">{product.currency}</span>
        </div>
      </div>
    </div>
  );
}
