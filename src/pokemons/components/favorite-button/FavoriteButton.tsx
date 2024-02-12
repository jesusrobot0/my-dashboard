"use client";

import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import { toggleFavorite } from "@/lib/store/features/pokemons/pokemonsSlice";
import { SimplePokemon } from "../../interfaces/simple-pokemon";
import { Heart, HeartOff } from "lucide-react";

interface Props {
  pokemon: SimplePokemon;
}

export function FavoriteButton({ pokemon }: Props) {
  const isFavorite = useAppSelector((state) => !!state.pokemons[pokemon.id]);
  const dispatch = useAppDispatch();

  const handleToggle = () => dispatch(toggleFavorite(pokemon));
  return (
    <button
      className="p-2 flex items-center gap-1 text-xs text-red-500"
      onClick={handleToggle}
    >
      {isFavorite ? (
        <Heart width={18} color="red" />
      ) : (
        <HeartOff width={18} color="red" />
      )}
      {isFavorite ? "Es favorito" : "No es favorito"}
    </button>
  );
}
