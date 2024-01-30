import { ColorTypes, Type } from "@/pokemons/interfaces/pokemon-type";

interface Props {
  types: Type[];
  name: string;
}

const COLOR_TYPES: ColorTypes = {
  steel: "bg-[#d5d5d5]",
  water: "bg-[#59bfff]",
  bug: "bg-[#c5d895]",
  dragon: "bg-[#a585d5]",
  electric: "bg-[#ffffe0]",
  ghost: "bg-[#993333]",
  fire: "bg-[#ff6666]",
  fairy: "bg-[#f5fffa]",
  ice: "bg-[#b5ffff]",
  fighting: "bg-[#f0c8c5]",
  normal: "bg-[#d5d5d5]",
  grass: "bg-[#95ff95]",
  psychic: "bg-[#f5ffff]",
  rock: "bg-[#d5c2b6]",
  dark: "bg-[#b33333]",
  ground: "bg-[#e5c5a5]",
  poison: "bg-[#c5d2a5]",
  flying: "bg-[#d5f5d5]",
};

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
