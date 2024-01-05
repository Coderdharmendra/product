import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductList from "./components/productList/productList";
import Cart from "./components/cart";
import Home from "./container/home";
import { useState } from "react";
import { ProductStore } from "./constant/cartprovider";

function App() {
  const [cart, setCart] = useState([]);
  const [isLogin, setIslogin] = useState();
  return (
    // <ProductStore value={{ cart, setCart }}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/product" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    </BrowserRouter>
    // </ProductStore>
  );
}

export default App;
