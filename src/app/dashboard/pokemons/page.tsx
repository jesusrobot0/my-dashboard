import { TitlePage } from "@/components";

export default function PokemonsPage() {
  return (
    <div>
      <TitlePage
        title="Pokémons"
        description="With this app I learned Server Side Rendering (SSR) and Statir Site Generation (SSG)"
      />

      <main className="w-full h-full flex gap-3"></main>
    </div>
  );
}
