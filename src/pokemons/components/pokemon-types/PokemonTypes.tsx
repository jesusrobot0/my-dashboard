"use client";
import { useEffect, useState } from "react";
import { ColorTypes, Type } from "@/pokemons";

interface Props {
  name: string;
}

const COLOR_TYPES: ColorTypes = {
  steel: "bg-[#d5d5d5]",
  water: "bg-[#59bfff]",
  bug: "bg-[#c5d895]",
  dragon: "bg-[#a585d5]",
  electric: "bg-[#ffffe0]",
  ghost: "bg-[#993333]",
  fire: "bg-[#ff6666]",
  fairy: "bg-[#f5fffa]",
  ice: "bg-[#b5ffff]",
  fighting: "bg-[#f0c8c5]",
  normal: "bg-[#d5d5d5]",
  grass: "bg-[#95ff95]",
  psychic: "bg-[#f5ffff]",
  rock: "bg-[#d5c2b6]",
  dark: "bg-[#b33333]",
  ground: "bg-[#e5c5a5]",
  poison: "bg-[#c5d2a5]",
  flying: "bg-[#d5f5d5]",
};

export function PokemonTypes({ name }: Props) {
  const [types, setTypes] = useState<Type[]>([]);

  useEffect(() => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setTypes(json.types));
  }, []);
  return (
    <>
      {types.map((pokemonType, index) => (
        <span
          key={`${name}-type-${index}`}
          className={`px-2 py-1 text-xs rounded-full ${
            COLOR_TYPES[pokemonType.type.name]
          } text-[#333333] capitalize`}
        >
          {pokemonType.type.name}
        </span>
      ))}
    </>
  );
}
