import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import Header from "./components/Header";
import "./App.min.css";

const HomeView = lazy(() => import("./views/Home"));

const ProductDetailView = lazy(() => import("./views/product/Detail"));
const CartView = lazy(() => import("./views/cart/Cart"));
const NotFoundView = lazy(() => import("./views/pages/404"));
const InternalServerErrorView = lazy(() => import("./views/pages/500"));
const Footer = lazy(() => import("./components/Footer"));

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Header />
        <Suspense
          fallback={
            <div className="text-white text-center mt-3">Loading...</div>
          }
        >
          <Routes>
            <Route exact path="/" element={<HomeView/>} />
            <Route exact path="/product/detail" element={<ProductDetailView/>} />
            <Route exact path="/cart" element={<CartView/>} />
            <Route exact path="/500" element={<InternalServerErrorView/>} />
            <Route path="*" element={<NotFoundView/>} />
          </Routes>
        </Suspense>
        <Footer />
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
