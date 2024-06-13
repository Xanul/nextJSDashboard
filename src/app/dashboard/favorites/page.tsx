import { HeaderBar } from "@/components/header/HeaderBar";
import {
  FavoritePokemons,
  PokemonGrid,
  PokemonsResponse,
  SimplePokemon,
} from "@/pokemons";
import { notFound } from "next/navigation";

export const metadata = {
  title: "Favorite Pokemons",
  description: "List of all favorite pokemons",
};



export default async function FavoritePokemonsPage() {
  return (
    <div className="flex flex-col px-2">
      <HeaderBar 
        title="Favorite Pokemons"
        subTitle="Global State (Redux)"
        description="This part of the dashboard allows you to manage your favorite Pokémon, leveraging global state management with Redux. Your selections are stored globally across the application, ensuring a consistent and synchronized user experience. Additionally, your favorite Pokémon are saved in the local storage, so they persist even when you refresh the page or close your browser. This example demonstrates the powerful combination of Redux and local storage to create a seamless and persistent state management solution."
      />
      <FavoritePokemons />
      
    </div>
  );
}
