"use client";
import { Tally5 } from "lucide-react";
import { Widget } from "../widget/Widget";
import { useAppSelector } from "@/lib/store/hooks";

export function WidgetGrid() {
  const { count } = useAppSelector((state) => state.counter);

  return (
    <main className="w-full h-full mt-12 flex flex-wrap gap-10">
      <Widget
        href="/dashboard/counter"
        icon={<Tally5 color="#c0c0c0" size={35} />}
        title={String(count)}
        label="Counter"
      />
    </main>
  );
}
