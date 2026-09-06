import React from "react";
import "./ReduxMPE_ComMainApp.css";
import ProductList from "./e-commerce/components/productsList/ProductList";
import TopNavBar from "./e-commerce/components/navbar/TopNavBar";
import { Route, Routes } from "react-router-dom";
import ShopCart from "./e-commerce/components/shopping-cart/ShopCart";

const ReduxEcomMainApp = () => {
  return (
    <>
      <div className="miniapp">
        <TopNavBar />
        <Routes>
          <Route path="/cart" element={<ShopCart />} />
          <Route path="/" element={<ProductList />} />
        </Routes>
      </div>
    </>
  );
};

export default ReduxEcomMainApp;
