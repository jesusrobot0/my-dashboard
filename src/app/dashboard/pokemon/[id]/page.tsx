import type { Metadata } from "next";
import { getPokemon } from "@/pokemons";

interface Props {
  params: { id: string };
}

export async function generateMetadata({
  params: { id },
}: Props): Promise<Metadata> {
  const { name } = await getPokemon(id);

  return {
    title: name,
    description: `${name} page`,
  };
}

export default async function PokemonPage({ params: { id } }: Props) {
  const pokemon = await getPokemon(id);

  return (
    <div>
      <h1>Hello {pokemon.name}</h1>
    </div>
  );
}
