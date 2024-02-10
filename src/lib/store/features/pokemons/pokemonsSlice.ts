import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SimplePokemon } from "@/pokemons";

// ESTO ES LO MISMO QUE EL RECORD, SOLO QUE ESTE ULTIMO ES MÁS CONCISO
// interface PokemonFavorites {
//   [key: string]: SimplePokemon;
// }
// const initialState: PokemonFavorites = {
//   "1": { id: "1", name: "bulbasaur", types: [] },
// };

const initialState: Record<string, SimplePokemon> = {};

const pokemonSlice = createSlice({
  name: "pokemons",
  initialState,
  reducers: {
    toggleFavorite(state, action: PayloadAction<SimplePokemon>) {
      const pokemon = action.payload;
      const id = pokemon.id;
      if (!!state[id]) {
        delete state[id];
        return state;
      }

      state[id] = pokemon;
    },
  },
});

export const { toggleFavorite } = pokemonSlice.actions;

export default pokemonSlice.reducer;
