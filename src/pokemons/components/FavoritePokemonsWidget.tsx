"use client";
import { useAppSelector } from "@/store";
import Image from "next/image";
import React from "react";

export const FavoritePokemonsWidget = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);
  const favPokeArray = Object.values(favoritePokemons);

  return (
    <div className="flex justify-center items-center w-full">
      <div className="bg-white shadow-xl p-3 min-w-full rounded-2xl border-1 border-gray-50 items-center">
        <div className="flex flex-col">
          <div className="my-2">
            <h2 className="font-bold text-gray-600 text-center">
              Favorite Pokemons
            </h2>
          </div>
          <div className="flex flex-wrap justify-center my-2">
            {favPokeArray.map((poke) => {
              return (
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${poke.id}.png`}
                  alt={`Sprite ${poke.name}`}
                  width={100}
                  height={100}
                  key={poke.id}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-center my-2">
            <h4 className="text-4xl">{favPokeArray.length}</h4>
            <p className="text-xs text-gray-500"> Favorite Pokemons</p>
          </div>
        </div>
      </div>
    </div>
  );
};
