import { IPokemon } from "../../Service/ProductApi";

export interface ICart {
  products: IPokemon[];
  addProduct: (newProduct: IPokemon) => void;
  removeProduct: (index: number) => void;
  total: () => number;
  length: number;
}

export const stateInitial: ICart = {
  products: [],
  addProduct: (newProduct: IPokemon) => {},
  removeProduct: (index: number) => {},
  total: () => {
    return 0;
  },
  length: 0,
};

export function addProduct(
  products: IPokemon[],
  setProducts: React.Dispatch<React.SetStateAction<IPokemon[]>>
) {
  return (newProduct: IPokemon): void => setProducts([...products, newProduct]);
}

export function removeProduct(
  products: IPokemon[],
  setProducts: React.Dispatch<React.SetStateAction<IPokemon[]>>
) {
  return (index: number): void => {
    const newProducts = products.filter((product, indexProduct) => {
      if (index === indexProduct) return;
      return product;
    });
    setProducts(newProducts);
  };
}

export function total(product: IPokemon[]) {
  return () => product.reduce((total, value) => total + value.price, 0);
}
