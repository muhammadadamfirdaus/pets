import React from "react";
import { HiChevronRight } from "react-icons/hi2";
import ProductFeaturedCard from "./ProductFeaturedCard";

export default function ProductFeatured({ data }) {
  // console.log(data);
  return (
    <div className="py-16 px-4 md:px-8 lg:px-32">
      <div className="flex justify-between items-center">
        <div>
          <h3>Hard to choose right products for your pets?</h3>
          <h1 className="text-2xl font-bold">Our Products</h1>
        </div>
        <button className="flex items-center px-7 py-3 rounded-full text-blue-950 border border-solid border-blue-950 text-sm leading-none max-h-[44px]">
          View More <HiChevronRight size={14} className="ml-2" />
        </button>
      </div>
      <div className="flex flex-wrap mt-7 list">
        {data.map((d, i) => (
          <div key={i} className="basis-2/4 md:basis-1/4 mb-5">
            <ProductFeaturedCard productFeatured={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
