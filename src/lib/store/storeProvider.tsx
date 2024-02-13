"use client";
import { useEffect, useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "./store";
import { setFavoritePokemons } from "./features/pokemons/pokemonsSlice";

interface Props {
  children: React.ReactNode;
}

export default function StoreProvider({ children }: Props) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore();
  }

  useEffect(() => {
    const favorites = JSON.parse(
      localStorage.getItem("favorite-pokemons") ?? "{}"
    );

    storeRef.current?.dispatch(setFavoritePokemons(favorites));
  }, []);

  return <Provider store={storeRef.current}>{children}</Provider>;
}
