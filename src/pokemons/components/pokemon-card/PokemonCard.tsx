import Image from "next/image";
import Link from "next/link";
import { HeartOff, MoveRight } from "lucide-react";
import { ColorTypes, PokemonTypes, SimplePokemon } from "@/pokemons";

interface Props {
  pokemon: SimplePokemon;
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

export function PokemonCard({ pokemon: { id, name, types } }: Props) {
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
      <div className="my-2 flex gap-2">
        <PokemonTypes types={types} name={name} />
      </div>
      <h2 className="text-xl text-bold capitalize">{name}</h2>
      <div className="flex items-center">
        <button className="p-2">
          <HeartOff width={18} color="red" />
        </button>
        <Link
          href={`/dashboard/pokemon/${id}`}
          className="flex items-center gap-1 p-2 text-xs text-[#5181da]"
        >
          See more
          <MoveRight width={12} />
        </Link>
      </div>
    </div>
  );
}
