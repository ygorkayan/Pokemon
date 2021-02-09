import React, { useContext } from "react";
import { Products } from "./Style";
import { createSection } from "./Util";
import { ProductContext } from "../../Context/Product/Product";

export default function Home() {
  const { products } = useContext(ProductContext);

  return (
    <React.Fragment>
      <Products>
        {createSection(products, "os mais pesquisados", 10)}
        {createSection(products, "com os melhores preço", 7)}
        {createSection(products, "os mais indicados para voce", 8)}
        {createSection(products, "de uma chance", 4)}
      </Products>
    </React.Fragment>
  );
}
