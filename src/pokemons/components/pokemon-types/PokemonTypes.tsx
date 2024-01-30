import { COLOR_TYPES } from "@/constants";
import { Type } from "@/pokemons/interfaces/pokemon-type";

interface Props {
  types: Type[];
  name: string;
}

export function PokemonTypes({ types, name }: Props) {
  return (
    <div className="h-[24px] flex gap-1">
      {types.map((pokemonType, index) => (
        <span
          key={`${name}-type-${index}`}
          className={`px-2 py-1 text-xs rounded-full ${
            COLOR_TYPES[pokemonType.type.name]
          } text-[#333333] capitalize`}
        >
          {pokemonType.type.name}
        </span>
      ))}
    </div>
  );
}
