import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";

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

  // throw new Error ('Este es un error que no debia suceder');
  // throw notFound();

  return pokemons;
};

export default async function PokemonsPage() {

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col px-2">
      <span className="text-5xl my-2">Pokemon List <small>static</small></span>
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}
