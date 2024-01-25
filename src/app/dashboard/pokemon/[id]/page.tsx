import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ChevronLeft } from "lucide-react";
import { PokemonTypes, getPokemon } from "@/pokemons";
import { capitalizeWord } from "@/utils";
import { TitlePage } from "@/components";

interface Props {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { name } = await getPokemon(id);

  const pokemonName = capitalizeWord(name);

  return {
    title: pokemonName,
    description: `${pokemonName} page`,
  };
}

export default async function PokemonPage({ params: { id } }: Props) {
  const pokemon = await getPokemon(id);

  return (
    <div className="ml-12 flex gap-8">
      <Link
        href="/dashboard/pokemons"
        className="w-[50px] h-[50px] mb-12 flex justify-center items-center rounded-full bg-[#e9e8eb]"
      >
        <ChevronLeft />
      </Link>
      <div className="w-5/6">
        <div className="mb-8">
          <Image
            src={pokemon.sprites.other?.dream_world.front_default ?? ""}
            width={320}
            height={320}
            alt={`Image of pokemon ${pokemon?.name}`}
            className="mb-5"
          />
        </div>
        <div className="flex flex-col">
          <TitlePage title={pokemon.name} />
          <div className="flex gap-12 mb-8 mt-8">
            <div>
              <p className="text-xl font-bold">Weight</p>
              <p className="text-4xl">
                {pokemon?.weight}
                <span className="text-2xl">Lb</span>
              </p>
            </div>
            <div>
              <p className="text-xl font-bold mb-2">Type</p>
              <PokemonTypes name={pokemon.name} />
            </div>
            <div>
              <p className="text-xl font-bold">Order</p>
              <p className="text-4xl">{pokemon.order}</p>
            </div>
          </div>
          <ul className="mb-8 flex flex-wrap ">
            {pokemon.moves.map((move) => (
              <li key={move.move.name} className="mr-2">
                {move.move.name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
