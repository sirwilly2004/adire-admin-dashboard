import React from "react";
import { Routes, Route } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Products from "./pages/Products";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";
import Blog from "./pages/Blog";
import Settings from "./pages/Settings";

export default function DashboardRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Analytics />} />
      <Route path="/products/*" element={<Products />} />
      <Route path="/orders" element={<Orders />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}