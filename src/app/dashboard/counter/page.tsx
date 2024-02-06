import type { Metadata } from "next";
import { TitlePage, Counter } from "@/components";

export const metadata: Metadata = {
  title: "Counter ",
};

export default function CounterPage() {
  return (
    <>
      <TitlePage
        title="Counter"
        description="With this app I learned Client Side Rendering (CSR)"
      />

      <main className="w-full h-full flex justify-center items-center">
        <Counter value={0} />
      </main>
    </>
  );
}
