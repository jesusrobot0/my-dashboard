import Link from "next/link";

interface Props {
  title: string;
  label?: string;
  icon: React.ReactNode;
  href: string;
}
export function Widget({ icon, href, title, label }: Props) {
  return (
    <article className="w-[220px] p-5 rounded-lg bg-[#f0f0f0]">
      <Link href={href} className="flex flex-col gap-2">
        <div>{icon}</div>
        <span className="text-8xl font-bold">{title}</span>
        {label && <span className="text-xl">{label}</span>}
      </Link>
    </article>
  );
}
