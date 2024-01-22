import { TitlePage } from "@/components";
import { getPokemons } from "@/pokemons";

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
