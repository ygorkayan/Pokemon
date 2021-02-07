import React from "react";
import { StyleGlobal } from "./StyleGlobal";
import { ProductProvider } from "./Context/Product/Product";
import { CartProvider } from "./Context/Cart/Cart";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";

export default function App() {
  return (
    <React.Fragment>
      <StyleGlobal />
      <ProductProvider>
        <CartProvider>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </CartProvider>
      </ProductProvider>
    </React.Fragment>
  );
}
