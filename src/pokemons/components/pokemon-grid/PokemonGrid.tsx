import { SimplePokemon } from "@/pokemons";

interface Props {
  pokemons: SimplePokemon[];
}
export function PokemonGrid({ pokemons }: Props) {
  return (
    <>
      {pokemons.map((pokemon) => (
        <p key={pokemon.id}>{pokemon.name}</p>
      ))}
    </>
  );
}
