import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddProductPage from "./pages/AddProductPage";
import AdminPage from "./pages/AdminPage";
import CartPage from "./pages/CartPage";
import EditProductPage from "./pages/EditProduct";
import MainPage from "./pages/MainPage";
import ProductDetails from "./pages/ProductDetails";
import Favorites from "./pages/Favorites"

const Navigation = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/admin-panel/add" element={<AddProductPage />} />
        <Route path="/admin-panel" element={<AdminPage />} />
        <Route path="/admin-panel/edit/:id" element={<EditProductPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/details/:id" element={<ProductDetails />}/>
        <Route path="/favorites" element={<Favorites/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
