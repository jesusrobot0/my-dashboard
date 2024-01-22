import { PokemonCard, SimplePokemon } from "@/pokemons";

interface Props {
  pokemons: SimplePokemon[];
}
export function PokemonGrid({ pokemons }: Props) {
  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </>
  );
}
