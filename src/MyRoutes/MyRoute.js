import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductDetail from "../pages/ProductDetail";

const MyRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mehsullar/:id" element={<ProductDetail />} />
    </Routes>
  );
};

export default MyRoute;
