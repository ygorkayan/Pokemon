import { createContext, useState, useEffect } from "react";
import ProductApi, { IPokemon } from "../../Service/ProductApi";
import { IProduct, stateInitial } from "./Util";

export const ProductContext = createContext<IProduct>(stateInitial);

export function ProductProvider(props: any) {
  const [products, setProducts] = useState<IPokemon[]>([]);

  useEffect(() => {
    ProductApi().then((resp) => setProducts(resp));
  }, []);

  const Provider = {
    products: [...products],
  };

  return (
    <ProductContext.Provider value={Provider}>
      {props.children}
    </ProductContext.Provider>
  );
}
