import Image from "next/image";
import Link from "next/link";
import { Metadata } from "next";
import { Sidebar } from "@/components";
import { title } from "@/fonts";

export const metadata: Metadata = {
  title: { absolute: "Page not Found" },
  description:
    "The resource you wanted to access does not exist or may have been moved",
};

export default function NotFound() {
  return (
    <div className="h-screen p-8 flex justify-between gap-4">
      <Sidebar />
      <div className="w-3/4 px-4 py-8 ">
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
          <p className="mb-8 text-2xl">Page Not Found</p>
          <Link
            href="/dashboard/home"
            className="py-4 px-12 rounded-md text-white bg-[#5181da] focus:bg-[#4168b0]"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}
