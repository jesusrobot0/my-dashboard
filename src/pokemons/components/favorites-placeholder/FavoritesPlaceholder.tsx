import { Heart } from "lucide-react";
import Link from "next/link";

export function FavoritesPlaceholder() {
  return (
    <div className="w-[960px] mt-16 flex flex-col justify-center items-center">
      <Heart color="#e77975" size={130} />
      <h2 className={`mb-8 text-5xl text-center text-red-400`}>No favorites</h2>
      <Link href="/dashboard/pokemons" className="underline text-[#6d99e0]">
        Go to the pokemons
      </Link>
    </div>
  );
}
