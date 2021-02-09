import React, { useContext } from "react";
import { SearchContext } from "../../Context/Search/Search";
import { Products } from "./Style";
import { createSection } from "./Util";

export default function Search() {
  const { products } = useContext(SearchContext);

  return (
    <React.Fragment>
      <Products>{createSection(products)}</Products>
    </React.Fragment>
  );
}
