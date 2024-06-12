import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";


export const metadata = {
 title: '151 Pokemons',
 description: '151 Pokemons',
};

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => {
    return {
      id: pokemon.url.split("/")[6],
      name: pokemon.name,
    };
  });

  return pokemons;
};

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col px-2">
      <span className="text-5xl my-2">Pokemon List <small className="text-blue-600">static</small></span>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}
