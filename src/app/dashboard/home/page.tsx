import { TitlePage, WidgetGrid } from "@/components";

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
      <WidgetGrid />
    </div>
  );
}
