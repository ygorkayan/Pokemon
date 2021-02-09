import { IPokemon } from "../../Service/ProductApi";

export interface ICart {
  products: IPokemon[];
  addProduct: (newProduct: IPokemon) => void;
  removeProduct: (index: number) => void;
  removeAll: () => void;
  total: () => number;
}

export const stateInitial: ICart = {
  products: [],
  addProduct: (newProduct: IPokemon) => {},
  removeProduct: (index: number) => {},
  removeAll: () => {},
  total: () => {
    return 0;
  },
};

export function saveLocalStorage(products: any) {
  localStorage.setItem("cart", JSON.stringify(products));
}

export function loadLocalStorage() {
  return JSON.parse(localStorage.getItem("cart") || "[]");
}

export function addProduct(
  products: IPokemon[],
  setProducts: React.Dispatch<React.SetStateAction<IPokemon[]>>
) {
  return (newProduct: IPokemon): void => {
    const temp = [...products, newProduct];
    setProducts([...products, newProduct]);
    saveLocalStorage(temp);
  };
}

export function removeProduct(
  products: IPokemon[],
  setProducts: React.Dispatch<React.SetStateAction<IPokemon[]>>
) {
  return (index: number): void => {
    const newProducts = products.filter((product, indexProduct) => {
      if (index === indexProduct) return false;
      return true;
    });
    saveLocalStorage(newProducts);
    setProducts(newProducts);
  };
}

export function removeAll(
  setProducts: React.Dispatch<React.SetStateAction<IPokemon[]>>
) {
  return () => {
    saveLocalStorage([]);
    setProducts([]);
  };
}

export function total(product: IPokemon[]) {
  return () => product.reduce((total, value) => total + value.price, 0);
}
