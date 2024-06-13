"use client";
import React, { useEffect, useState } from "react";
import { PokemonGrid } from "./PokemonGrid";
import { useAppSelector } from "@/store";
import { IoHeartOutline } from "react-icons/io5";

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center">
      <IoHeartOutline size={100}className="text-red-500"/>
      <span>No Favorites Yet, add some from Pokemon page</span>
    </div>
  )
}

export const FavoritePokemons = () => {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);
  
  const favoritePokemonsArray = Object.values(favoritePokemons);

  const [pokemons, setPokemons] = useState(favoritePokemonsArray);
  
  // useEffect(() => {
    
  //   // setPokemons(favoritePokemonsArray);

  // }, [favoritePokemonsArray])
  

  return (
    // <PokemonGrid pokemons={favoritePokemonsArray} />  
    <>
      {
        favoritePokemonsArray.length > 0 ? <PokemonGrid pokemons={favoritePokemonsArray}/> : <NoFavorites />
      }
    </>
  )
};
