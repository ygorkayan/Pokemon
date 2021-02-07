import React, { useContext } from "react";
import { Products } from "./Style";
import { createSection } from "./Util";
import Header from "../../Components/Header/Header";

import { ProductContext } from "../../Context/Product/Product";
import { CartContext } from "../../Context/Cart/Cart";

export default function Home() {
  const { products } = useContext(ProductContext);
  const { length } = useContext(CartContext);

  return (
    <React.Fragment>
      <Header title="pokemon store" amountProductInCart={length} />
      <Products>
        {createSection(products, "os mais pesquisados", 10)}
        {createSection(products, "com os melhores preço", 7)}
        {createSection(products, "os mais indicados para voce", 8)}
        {createSection(products, "de uma chance", 4)}
      </Products>
    </React.Fragment>
  );
}
