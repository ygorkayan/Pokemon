import React from "react";
import { StyleGlobal } from "./StyleGlobal";
import { ProductProvider } from "./Context/Product/Product";
import { CartProvider } from "./Context/Cart/Cart";
import { SearchProvider } from "./Context/Search/Search";
import { BrowserRouter } from "react-router-dom";

import Router from "./Router";

export default function App() {
  return (
    <React.Fragment>
      <StyleGlobal />
      <ProductProvider>
        <CartProvider>
          <SearchProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </SearchProvider>
        </CartProvider>
      </ProductProvider>
    </React.Fragment>
  );
}
