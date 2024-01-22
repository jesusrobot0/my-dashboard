import { TitlePage } from "@/components";
import { PokemonsResponse, SimplePokemon } from "@/pokemons";

async function getPokemons(limit = 151, offset = 0): Promise<SimplePokemon[]> {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  const pokemons = data.results.map((pokemon) => ({
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div>
      <TitlePage
        title="Pokémons"
        description="With this app I learned Server Side Rendering (SSR) and Statir Site Generation (SSG)"
      />

      <main className="w-full h-full flex gap-3 flex-col">
        {pokemons.map((pokemon) => (
          <p key={pokemon.id}>{pokemon.name}</p>
        ))}
      </main>
    </div>
  );
}
