import { TitlePage } from "@/components";

async function getPokemons(limit = 151, offset = 0) {
  const response = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  );
  const data = response.json();

  return data;
}

export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div>
      <TitlePage
        title="Pokémons"
        description="With this app I learned Server Side Rendering (SSR) and Statir Site Generation (SSG)"
      />

      <main className="w-full h-full flex gap-3">
        {JSON.stringify(pokemons)}
      </main>
    </div>
  );
}
