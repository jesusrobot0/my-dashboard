import { TitlePage } from "@/components";
import { PokemonGrid, getPokemons } from "@/pokemons";

export const metadata = {
  title: "Pokémons",
  description: "List of the first 151 pokemon",
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons();

  return (
    <div>
      <TitlePage
        title="Pokémons"
        description="With this app I learned Server Side Rendering (SSR) and Statir Site Generation (SSG)"
      />

      <main className="w-full h-full mt-12 flex flex-wrap gap-10">
        <PokemonGrid pokemons={pokemons} />
      </main>
    </div>
  );
}
