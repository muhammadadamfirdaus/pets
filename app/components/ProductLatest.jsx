import React from "react";
import ProductCard from "./ProductCard";
import Button from "./Button";

export default function ProductLatest({ data }) {
  // console.log(data);
  return (
    <div className="py-16 px-4 md:px-8 lg:px-32">
      <div className="flex justify-between items-center">
        <div>
          <h3>What&apos;s new?</h3>
          <h1 className="text-2xl font-bold">Take a look at some of our pets</h1>
        </div>
        <Button type="more" first>
          View More
        </Button>
      </div>
      <div className="flex flex-wrap mt-7 list">
        {data.map((d, i) => (
          <div key={i} className="basis-2/4 md:basis-1/4 mb-5">
            <ProductCard product={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
