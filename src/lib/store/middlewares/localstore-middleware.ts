import { Action, Dispatch, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "../store";

export function localStorageMiddleware(state: MiddlewareAPI) {
  return (next: any) => (action: any) => {
    next(action);

    if (action.type === "pokemons/toggleFavorite") {
      const { pokemons } = state.getState() as RootState;
      localStorage.setItem("favorite-pokemons", JSON.stringify(pokemons));
      return;
    }
  };
}
