"use client"; // Error components must be Client Components

import { title } from "@/fonts";
import Image from "next/image";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-[960px] mt-16 flex flex-col justify-center items-center">
      <Image
        src="/img/spongebob-computer.gif"
        alt="Image of spongebob computer on fire"
        width={498 / 2}
        height={326 / 2}
        className=" mb-8 text-red-400"
      />
      <h2
        className={`mb-8 text-9xl text-center ${title.className} text-red-400`}
      >
        Something went wrong!
      </h2>
      <p className="mb-8 text-2xl">{error.message}</p>
      <button
        className="py-4 px-12 rounded-md text-white bg-[#5181da] focus:bg-[#4168b0]"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}
