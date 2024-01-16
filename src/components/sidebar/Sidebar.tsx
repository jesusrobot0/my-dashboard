import Image from "next/image";
import Link from "next/link";
import { title } from "@/fonts";
import { LayoutGrid } from "lucide-react";

export function Sidebar() {
  return (
    <aside className="w-1/4 min-w-[300px] px-4 py-8 flex flex-col justify-between text-white rounded-2xl bg-[#4083e1]">
      <span className={`${title.className} text-4xl font-bold`}>
        Dashboard.
      </span>

      <nav>
        <ul className="flex flex-col gap-2">
          <li>
            <Link
              href="#"
              className="w-full p-4 flex items-center text-2xl gap-3 text-[#84b4eb] rounded-xl hover:text-white hover:bg-[#5f9be6]"
            >
              <span>
                <LayoutGrid color="#fff" />
              </span>
              <span>Home</span>
            </Link>
          </li>
        </ul>
      </nav>

      <footer>
        <div className="flex gap-3 items-center">
          <Image
            src="https://pbs.twimg.com/profile_images/1294191322195083264/8bGn_Y2z_400x400.jpg"
            alt="Foto de perfil del usuario Jesús Velasco"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-bold">Jesús Velasco</p>
            <p className="text-[#8eb3e6]">Fullstack Developer</p>
          </div>
        </div>
      </footer>
    </aside>
  );
}
