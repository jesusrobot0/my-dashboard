"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";

interface Props {
  value?: number;
}

export function Counter({ value }: Props) {
  const [counter, setCounter] = useState(value!);

  const handleAdd = () => setCounter(counter + 1);
  const handleReset = () => setCounter(0);
  const handleSubstract = () => counter >= 1 && setCounter(counter - 1);

  return (
    <div className="w-[300px] h-[250px] p-4 border border-[#ccc] rounded-md bg-[#fff]">
      <p className="mb-2 text-center text-xl font-bold text-[#4083e1]">
        Counter
      </p>
      <p className="text-center text-9xl text-bold">{counter}</p>
      <div className="flex gap-4 justify-center">
        <button
          className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#e9e8eb]"
          onClick={handleSubstract}
        >
          <ChevronLeft />
        </button>
        <button
          className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#e9e8eb]"
          onClick={handleReset}
        >
          <RotateCcw />
        </button>
        <button
          className="w-[50px] h-[50px] flex justify-center items-center rounded-full bg-[#e9e8eb]"
          onClick={handleAdd}
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
