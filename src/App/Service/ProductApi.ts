import axios, { AxiosResponse } from "axios";

const url = "https://pokeapi.co/api/v2/pokemon";

export interface IPokemon {
  id: number;
  name: string;
  photoFront: string;
  photoBack: string;
  rate: number;
  price: number;
}

function extractInfo(pokemon: any): IPokemon {
  const id = pokemon.id;
  const name = pokemon.name;
  const photoFront = pokemon.sprites.front_default;
  const photoBack = pokemon.sprites.back_default;
  const rate = Math.round(Math.random() * (5 - 1) + 1);
  const price = Math.round(Math.random() * (100 - 1) + 1);

  return { id, name, photoFront, photoBack, rate, price };
}

const Pokemon: Promise<AxiosResponse>[] = [];

for (let i = 1; i <= 100; i++) {
  Pokemon.push(axios.get(`${url}/${i}`));
}

export default function searchProduct(): Promise<IPokemon[]> {
  return Promise.all(Pokemon).then((resp) =>
    resp.map((value) => extractInfo(value.data))
  );
}
