import { PokemonsResponse, SimplePokemon, getPokemon } from "@/pokemons";

export async function getPokemons(
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(endpoint);
  const data: PokemonsResponse = await response.json();

  const pokemonPromises = data.results.map(async (pokemon) => {
    const pokemonTypes = await getPokemon(pokemon.name);
    console.log(pokemonTypes.types);

    return {
      id: pokemon.url.split("/").at(-2)!,
      name: pokemon.name,
      types: pokemonTypes.types,
    };
  });

  const pokemons = await Promise.all(pokemonPromises);

  // throw new Error("Oh god the server is on fire 🔥");

  return pokemons;
}
