import { TitlePage } from "@/components";
import { PokemonGrid, getPokemons } from "@/pokemons";

export const metadata = {
  title: "Favorites",
  description: "List of pokemons added to favorites",
};

export default async function FavoritesPage() {
  return (
    <div>
      <TitlePage
        title="Favorites"
        description="With this page I learned how to implement a state handler on the client like Redux."
      />

      <main className="w-full h-full mt-12 flex flex-wrap gap-10">
        <PokemonGrid pokemons={[]} />
      </main>
    </div>
  );
}
