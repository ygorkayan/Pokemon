import { IPokemon } from "../../Service/ProductApi";

export interface IProduct {
  products: IPokemon[];
  query: string;
  setQuery: (query: string) => void;
}

export const stateInitial: IProduct = {
  products: [],
  query: "",
  setQuery(query: string) {},
};
