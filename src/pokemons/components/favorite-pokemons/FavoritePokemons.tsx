"use client";

import { useState } from "react";
import { useAppSelector } from "@/lib/store/hooks";
import { FavoritesPlaceholder, PokemonGrid } from "@/pokemons";

export function FavoritePokemons() {
  const favoritePokemons = useAppSelector((state) => state.pokemons);
  const favoritePokemonsArray = Object.values(favoritePokemons);
  const [pokemons, setPokemons] = useState(favoritePokemonsArray);

  return (
    <>
      {pokemons.length !== 0 ? (
        <PokemonGrid pokemons={pokemons} />
      ) : (
        <FavoritesPlaceholder />
      )}
    </>
  );
}
