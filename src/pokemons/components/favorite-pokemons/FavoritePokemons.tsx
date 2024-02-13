"use client";

// import { useEffect, useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { FavoritesPlaceholder, PokemonGrid } from "@/pokemons";

export function FavoritePokemons() {
  const favoritePokemons = useAppSelector((state) => state.pokemons.favorites);
  const favoritePokemonsArray = Object.values(favoritePokemons);
  // const [pokemons, setPokemons] = useState(favoritePokemonsArray);

  // useEffect(() => {
  //   setPokemons(favoritePokemonsArray);
  //   console.log(pokemons);
  // }, [favoritePokemons]);

  return (
    <>
      {favoritePokemonsArray.length !== 0 ? (
        <PokemonGrid pokemons={favoritePokemonsArray} />
      ) : (
        <FavoritesPlaceholder />
      )}
    </>
  );
}
