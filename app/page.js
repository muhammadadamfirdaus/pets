import Image from "next/image";
import Hero from "./components/Hero";
import Header from "./components/Header";
import ProductLatest from "./components/ProductLatest";
import { productsLatest, productFeatured } from "./data/product";
import Banner from "./components/Banner";
import { articleLatest } from "./data/article";
import ProductFeatured from "./components/ProductFeatured";
import Partners from "./components/Partners";
import ArticleLatest from "./components/ArticleLatest";
import Footer from "./components/Footer";
import Banner2 from "./components/Banner2";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <ProductLatest data={productsLatest} />
      <Banner />
      <ProductFeatured data={productFeatured} />
      <Partners />
      <Banner2 />
      <ArticleLatest data={articleLatest} />
      <Footer />
    </>
  );
}
