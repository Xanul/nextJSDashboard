import { PokemonGrid, PokemonsResponse, SimplePokemon } from "@/pokemons";
import { notFound } from "next/navigation";


export const metadata = {
 title: 'Favorite Pokemons',
 description: 'List of all favorite pokemons',
};

export default async function PokemonsPage() {

  return (
    <div className="flex flex-col px-2">
      <span className="text-5xl my-2">Favrotie Pokemons<small className="text-blue-600"> Global State</small></span>
      <PokemonGrid pokemons={[]}/>
    </div>
  );
}
