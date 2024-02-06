import { TitlePage, Widget } from "@/components";

export const metadata = {
  title: "Home",
  description: "List of pokemons added to favorites",
};

export default async function HomePage() {
  return (
    <div>
      <TitlePage
        title="Home"
        description="General Information (Redux and LS)"
      />

      <main className="w-full h-full mt-12 flex flex-wrap gap-10">
        <Widget />
      </main>
    </div>
  );
}
