import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { CartContext } from "../../Context/Cart/Cart";
import { SearchContext } from "../../Context/Search/Search";
import { Products } from "./Style";
import { createSection } from "./Util";

export default function Search() {
  const { length } = useContext(CartContext);
  const { products } = useContext(SearchContext);

  return (
    <React.Fragment>
      <Header title="pokemon store" amountProductInCart={length} />
      <Products>{createSection(products)}</Products>
    </React.Fragment>
  );
}
