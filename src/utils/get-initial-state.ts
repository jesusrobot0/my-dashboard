import { SimplePokemon } from "@/pokemons";

interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

export function getInitialState(): PokemonState {
  // Esto aparentemente funciona pero nos da un error de:
  // Hydration failed because the initial UI does not match what was rendered on the server.
  // if (typeof localStorage === "undefined") return {};

  const favorites = JSON.parse(
    localStorage.getItem("favorite-pokemons") ?? "{}"
  );

  return favorites;
}
