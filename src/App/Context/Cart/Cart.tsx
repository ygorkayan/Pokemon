import { createContext, useState } from "react";
import { IPokemon } from "../../Service/ProductApi";
import { ICart, stateInitial, addProduct, removeProduct, total } from "./Util";

export const CartContext = createContext<ICart>(stateInitial);

export function CartProvider(props: any) {
  const [products, setProducts] = useState<IPokemon[]>([]);

  const Provider = {
    products: [...products],
    addProduct: addProduct(products, setProducts),
    removeProduct: removeProduct(products, setProducts),
    total: total(products),
    length: products.length
  };

  return (
    <CartContext.Provider value={Provider}>
      {props.children}
    </CartContext.Provider>
  );
}
