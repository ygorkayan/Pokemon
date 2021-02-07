import React from "react";
import { StyleGlobal } from "./StyleGlobal";
import { ProductProvider } from "./Context/Product/Product";

import Home from "./Pages/Home/Home";

export default function App() {
  return (
    <React.Fragment>
      <StyleGlobal />
      <ProductProvider>
        <Home />
      </ProductProvider>
    </React.Fragment>
  );
}
