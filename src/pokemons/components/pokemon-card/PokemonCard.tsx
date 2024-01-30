import Image from "next/image";
import Link from "next/link";
import { HeartOff, MoveRight } from "lucide-react";
import { PokemonTypes, SimplePokemon } from "@/pokemons";
import { COLOR_TYPES, POKEMONS_API } from "@/constants";

interface Props {
  pokemon: SimplePokemon;
}

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
