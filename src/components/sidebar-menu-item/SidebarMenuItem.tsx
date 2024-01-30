"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { clsx } from "clsx";

interface Props {
  path: string;
  icon: JSX.Element;
  title: string;
}

export function SidebarMenuItem({ path, icon, title }: Props) {
  const currentPage = usePathname();
  const isSamePath = currentPage === path;
  return (
    <li>
      <Link
        href={path}
        className={clsx(
          "w-full p-4 flex items-center text-2xl gap-3 text-[#84b4eb] rounded-xl hover:text-white hover:bg-[#5f9be6]",
          isSamePath && "text-white bg-[#5f9be6]"
        )}
      >
        <span>{icon}</span>
        <span>{title}</span>
      </Link>
    </li>
  );
}
