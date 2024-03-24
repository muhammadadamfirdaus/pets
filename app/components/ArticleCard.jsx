import React from "react";
import Image from "next/image";

export default function ArticleCard({ article }) {
  const articleContent = article.articleBody;
  const trimArticle = articleContent.length > 10 && articleContent.slice(0, 100);

  return (
    <div className="card p-2 rounded-xl mr-1 h-full">
      <div className="max-h-[254px] overflow-hidden rounded-xl">
        <Image src={article.imageFeatured} className={`w-full`} width={264} height={264} alt={article.title} priority />
      </div>
      <div className="p-1">
        <button className="px-[10px] py-[2px] bg-[#00A7E7] font-bold text-[10px] text-white my-3">{article.articleCategory}</button>
        <h1 className="font-bold text-sm">{article.title}</h1>
        <div className="flex mt-2">
          <p className="font-normal text-sm text-[#242B33] mr-1">{trimArticle} ...</p>
        </div>
      </div>
    </div>
  );
}
