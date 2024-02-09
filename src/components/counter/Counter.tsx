"use client";

import { useEffect } from "react";
import { ChevronLeft, ChevronRight, RotateCcw } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/lib/store/hooks";
import {
  addOne,
  initCounterState,
  resetCount,
  substractOne,
} from "@/lib/store/features/counter/CounterSlice";

interface Props {
  value?: number;
}

// En otras circunstancias estarian en un archivo por separado el interfaz y la llamada

interface CounterResponse {
  count: number;
}

async function getApiCounter(): Promise<CounterResponse> {
  const data = await fetch("/api/counter").then((res) => res.json());

  return data;
  // return data as CounterResponse // esto seria lo mismo que usar : Promise<CounterResponse>
}

export function Counter({ value = 0 }: Props) {
  // const [counter, setCounter] = useState(value!); // esto es lo mismo que lo de abajo
  const counter = useAppSelector((state) => state.counter.count);
  const dispatch = useAppDispatch();

  const handleAdd = () => dispatch(addOne());
  const handleReset = () => dispatch(resetCount(0));
  const handleSubstract = () => counter >= 1 && dispatch(substractOne());

  // useEffect(() => {
  //   dispatch(initCounterState(value));
  // }, []);

  useEffect(() => {
    getApiCounter().then(({ count }) => dispatch(initCounterState(count)));
  }, []);

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
