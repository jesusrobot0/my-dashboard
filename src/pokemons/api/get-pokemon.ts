import { notFound } from "next/navigation";
import { CompletePokemon } from "..";

export async function getPokemon(
  pokemon: string = "pikachu"
): Promise<CompletePokemon> {
  try {
    const endpoint = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(endpoint, {
      next: { revalidate: 60 * 60 * 24 * 30 * 6 },
    });
    const data = await response.json();

    // todo: clean data
    return data;
  } catch (error) {
    notFound();
  }
}
