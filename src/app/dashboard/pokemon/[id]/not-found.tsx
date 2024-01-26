import Image from "next/image";
import Link from "next/link";
import { Sidebar } from "@/components";
import { title } from "@/fonts";

export default function NotFound() {
  return (
    <div className="w-[960px] mt-16 flex flex-col justify-center items-center">
      <Image
        src="/img/bob-404.jpeg"
        alt="Image of spongebob computer on fire"
        width={957 / 3}
        height={720 / 2}
        className=" mb-8 text-red-400"
      />
      <h2
        className={`mb-8 text-9xl text-center ${title.className} text-red-400`}
      >
        404
      </h2>
      <p className="mb-8 text-2xl">Pokémon Not Found</p>
      <Link
        href="/dashboard/home"
        className="py-4 px-12 rounded-md text-white bg-[#5181da] focus:bg-[#4168b0]"
      >
        Go Home
      </Link>
    </div>
  );
}
