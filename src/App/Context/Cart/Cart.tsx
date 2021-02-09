import { createContext, useState, useEffect } from "react";
import { IPokemon } from "../../Service/ProductApi";
import {
  ICart,
  stateInitial,
  addProduct,
  removeProduct,
  removeAll,
  total,
  loadLocalStorage,
} from "./Util";

export const CartContext = createContext<ICart>(stateInitial);

export function CartProvider(props: any) {
  const [products, setProducts] = useState<IPokemon[]>([]);

  useEffect(() => setProducts(loadLocalStorage()), []);

  const Provider = {
    products: [...products],
    addProduct: addProduct(products, setProducts),
    removeProduct: removeProduct(products, setProducts),
    total: total(products),
    removeAll: removeAll(setProducts),
    length: products.length,
  };

  return (
    <CartContext.Provider value={Provider}>
      {props.children}
    </CartContext.Provider>
  );
}
