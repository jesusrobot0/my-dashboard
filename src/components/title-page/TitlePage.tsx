import React from "react";

interface Props {
  title: string;
  description?: string;
}

export function TitlePage({ title, description }: Props) {
  return (
    <div>
      <h1 className="mb-2 text-3xl font-bold capitalize text-[#222]">
        {title}
      </h1>
      <p>{description}</p>
    </div>
  );
}
