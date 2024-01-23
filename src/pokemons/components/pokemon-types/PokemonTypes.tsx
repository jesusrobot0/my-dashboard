"use client";
import { useEffect, useState } from "react";
import { Type } from "@/pokemons";
import { COLOR_TYPES } from "@/constants";

interface Props {
  name: string;
}

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
