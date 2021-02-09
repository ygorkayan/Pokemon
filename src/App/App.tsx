import React from "react";
import { StyleGlobal } from "./StyleGlobal";
import { ProductProvider } from "./Context/Product/Product";
import { CartProvider } from "./Context/Cart/Cart";
import { SearchProvider } from "./Context/Search/Search";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header/Header";

import Router from "./Router";

export default function App() {
  return (
    <React.Fragment>
      <StyleGlobal />
      <ProductProvider>
        <CartProvider>
          <SearchProvider>
            <BrowserRouter>
              <Header title="pokemon store" />
              <Router />
            </BrowserRouter>
          </SearchProvider>
        </CartProvider>
      </ProductProvider>
    </React.Fragment>
  );
}
