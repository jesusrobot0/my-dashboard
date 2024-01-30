import Image from "next/image";
import Link from "next/link";
import { title } from "@/fonts";
import { SidebarMenuItem } from "..";
import { Home, StopCircle, Tally5 } from "lucide-react";

const menuItems = [
  {
    path: "/dashboard/home",
    icon: <Home />,
    title: "Home",
  },
  {
    path: "/dashboard/counter",
    icon: <Tally5 />,
    title: "Counter",
  },
  {
    path: "/dashboard/pokemons",
    icon: <StopCircle />,
    title: "Pékemons",
  },
];

export function Sidebar() {
  return (
    <aside className="w-1/4 min-w-[320px] px-4 py-8 flex flex-col justify-between text-white rounded-2xl bg-[#4083e1]">
      <span className={`${title.className} text-4xl font-bold`}>
        Next Learn.
      </span>

      <nav>
        <ul className="flex flex-col gap-2">
          {menuItems.map((item) => (
            <SidebarMenuItem key={`${item.path}`} {...item} />
          ))}
        </ul>
      </nav>

      <footer>
        <Link
          href="https://github.com/jesusrobot0"
          target="_blank"
          className="flex gap-3 items-center"
        >
          <Image
            src="https://pbs.twimg.com/profile_images/1294191322195083264/8bGn_Y2z_400x400.jpg"
            alt="Profile picture of user Jesús Velasco"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col">
            <p className="font-bold">Jesús Velasco</p>
            <span className="text-[#8eb3e6]">Fullstack Developer</span>
          </div>
        </Link>
      </footer>
    </aside>
  );
}
