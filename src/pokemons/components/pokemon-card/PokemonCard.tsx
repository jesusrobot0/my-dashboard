"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, HeartOff, MoveRight } from "lucide-react";
import { SimplePokemon, getPokemon } from "@/pokemons";

interface Props {
  pokemon: SimplePokemon;
}

const POKEMONS_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/";

export function PokemonCard({ pokemon: { id, name } }: Props) {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${name}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((json) => setTypes(json.types));
  }, []);
  return (
    <div className="w-[300px] p-4 border border-gray-200 rounded-lg">
      <div className="h-[160px] flex justify-center items-center bg-gradient-to-b from-slate-100 via-neutral-50">
        <Image
          src={`${POKEMONS_API}${id}.svg`}
          alt={`Image of the pokemon ${name}`}
          width={110}
          height={110}
        />
      </div>
      <div className="my-2">
        {types.map((pokemonType, index) => (
          <span
            key={`${name}-type-${index}`}
            className="px-2 py-1 text-xs rounded-full bg-gray-200"
          >
            {pokemonType.type.name}
          </span>
        ))}
      </div>
      <h2 className="text-xl text-bold capitalize">{name}</h2>
      <div className="flex items-center">
        <button className="p-2">
          <HeartOff width={18} color="red" />
        </button>
        <Link
          href={`/dashboard/pokemons/${id}`}
          className="flex items-center gap-1 p-2 text-xs text-[#5181da]"
        >
          See more
          <MoveRight width={12} />
        </Link>
      </div>
    </div>
  );
}
