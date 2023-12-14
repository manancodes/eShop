import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Products from "./containers/Products";
import ProductDescription from "./containers/ProductDescription";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/home" element={<Products />} />
        <Route path="/products/:productId" element={<ProductDescription />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
};

export default App;
