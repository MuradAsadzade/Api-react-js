import React, { useEffect, useRef, useState } from "react";
import HeroSlider from "../components/hero-slider/HeroSlider";
import ProductList from "../components/product-list/ProductList";
const Home = () => {
  return (
    <>
      {/* <HeroSlider /> */}

      <hr />
      <ProductList categoryName="category" bannerName="categoryBanners" />
      <ProductList categoryName="seller" bannerName="sellerBanners" />
    </>
  );
};

export default Home;
