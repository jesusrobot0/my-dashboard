import { SimplePokemon } from "..";

export async function getPokemon(
  pokemon: string = "pikachu"
): Promise<SimplePokemon> {
  const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
  const response = await fetch(endpoint);
  const data = await response.json();

  return data;
}
