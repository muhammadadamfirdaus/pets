import React from "react";
import ArticleCard from "./ArticleCard";
import Button from "./Button";

export default function ArticleLatest({ data }) {
  // console.log(data);
  return (
    <div className="py-16 px-4 md:px-8 lg:px-32">
      <div className="flex justify-between items-center">
        <div>
          <h3>You already know?</h3>
          <h1 className="text-2xl font-bold">Useful Pet Knowledge</h1>
        </div>
        <Button type="more" first>
          View More
        </Button>
      </div>
      <div className="flex flex-wrap mt-7 list">
        {data.map((d, i) => (
          <div key={i} className="md:basis-1/3 mb-5">
            <ArticleCard article={d} />
          </div>
        ))}
      </div>
    </div>
  );
}
