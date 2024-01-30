import { Type } from "./pokemon-type";

export interface SimplePokemon {
  id: string;
  name: string;
  types: Type[];
}
