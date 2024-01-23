interface Props {
  params: { id: string };
}
export default function PokemonPage({ params }: Props) {
  return (
    <div>
      <h1>Hello Page</h1>
    </div>
  );
}
