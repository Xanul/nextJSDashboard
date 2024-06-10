import React from "react";
import { SimplePokemon } from "../interfaces/simple-pokemon";
import Image from "next/image";
import { PokemonCard } from "./PokemonCard";

interface Props {
  pokemons: SimplePokemon[];
}

export const PokemonGrid = ({ pokemons }: Props) => {
  return (
    <div className="flex flex-wrap gap-5 items-center justify-center">
      {pokemons.map((poke) => (        
        <PokemonCard pokemon={poke} key={poke.id}/>
      ))}
    </div>
  );
};
