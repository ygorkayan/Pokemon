import { IPokemon } from "../../Service/ProductApi";

export interface IProduct {
  products: IPokemon[];
}

export const stateInitial: IProduct = {
  products: [],
};