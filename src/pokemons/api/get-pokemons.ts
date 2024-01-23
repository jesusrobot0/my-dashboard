import { PokemonsResponse, SimplePokemon } from "@/pokemons";

export async function getPokemons(
  limit = 151,
  offset = 0
): Promise<SimplePokemon[]> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
  const response = await fetch(endpoint);
  const data: PokemonsResponse = await response.json();

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  // throw new Error("Oh god the server is on fire 🔥");

  return pokemons;
}
