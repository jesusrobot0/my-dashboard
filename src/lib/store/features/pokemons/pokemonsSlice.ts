import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";
// import { getInitialState } from "@/utils";

// ESTO ES LO MISMO QUE EL RECORD, SOLO QUE ESTE ULTIMO ES MÁS CONCISO
// interface PokemonFavorites {
//   [key: string]: SimplePokemon;
// }
// const initialState: PokemonFavorites = {
//   "1": { id: "1", name: "bulbasaur", types: [] },
// };
// const initialState: Record<string, SimplePokemon> = {
//   ...getInitialState(),
// };

interface PokemonState {
  favorites: {
    [key: string]: SimplePokemon;
  };
}

const initialState: PokemonState = {
  favorites: {},
  // ...getInitialState(),
};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    setFavoritePokemons(
      state,
      action: PayloadAction<{ [key: string]: SimplePokemon }>
    ) {
      state.favorites = action.payload;
    },

    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const id = pokemon.id;

      if (!!state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = pokemon;
      }

      // esto no se debe de hacer en redux, por que los reducers deben de ser funciones puras
      // En vez de esto crea un middleware
      localStorage.setItem(
        "favorite-pokemons",
        JSON.stringify(state.favorites)
      );
    },
  },
});

export const { toggleFavorite, setFavoritePokemons } = pokemonSlice.actions;

export default pokemonSlice.reducer;
