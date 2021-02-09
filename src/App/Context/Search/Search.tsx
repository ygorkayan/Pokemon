import { createContext, useState, useEffect, useContext } from "react";
import { IPokemon } from "../../Service/ProductApi";
import { IProduct, stateInitial } from "./Util";
import { ProductContext } from "../../Context/Product/Product";

export const SearchContext = createContext<IProduct>(stateInitial);

export function SearchProvider(props: any) {
  const { products } = useContext(ProductContext);
  const [findingsProducts, setFindingsProducts] = useState<IPokemon[]>([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) setFindingsProducts(products);
    const regex = RegExp(`.*${query}.*`, "gi");
    const temp = products.filter((product) => {
      return product.name.match(regex);
    });
    setFindingsProducts(temp);
  }, [query]);

  const Provider = {
    products: [...findingsProducts],
    query,
    setQuery,
  };

  return (
    <SearchContext.Provider value={Provider}>
      {props.children}
    </SearchContext.Provider>
  );
}
