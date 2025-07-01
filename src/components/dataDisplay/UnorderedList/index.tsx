import { UnorderedListImpl } from "@/types/unorderedListType";
import Link from "next/link";
import { type ReactNode } from "react";

type UnorderedListProps = {
  items: UnorderedListImpl;
  children?: ReactNode;
};

const UnorderedList = ({ items, children }: UnorderedListProps) => {
  const itemsMapped = items.topics.map((item) => (
    <li key={item.link}>
      <Link href={item.link} aria-label={item.subtitle}>
        {item.subtitle}
      </Link>
    </li>
  ));

  return (
    <div
      className="w-48 leading-8 flex flex-col justify-center"
      aria-label={items?.title || "Information list"}
    >
      <h6 className="font-bold">{items.title}</h6>
      <ul
        className="w-48 leading-8 flex flex-col justify-center"
        aria-label={items?.title ? `${items.title} topics` : "List topics"}
      >
        {children}
        {itemsMapped}
      </ul>
    </div>
  );
};

export default UnorderedList;
