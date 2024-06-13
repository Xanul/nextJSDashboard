import { HeaderBar } from "@/components/header/HeaderBar";
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
      <HeaderBar 
        title="Pokemon List"
        subTitle="Static Generated"
        description="Welcome to the Pokemons section! This part of the dashboard showcases a list of Pokémon generated using server-side rendering (SSR). By fetching the data on the server and rendering it before sending the HTML to the client, this approach ensures fast load times and improved SEO. Explore the list to see how Next.js handles server-side data fetching and rendering, providing a smooth and efficient user experience."
      />
      <PokemonGrid pokemons={pokemons}/>
    </div>
  );
}
