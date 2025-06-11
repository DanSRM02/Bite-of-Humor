// import classes from "./UnorderedList.module.scss";
import { LanguageContext } from "@/context/languageContext";
import { LanguageCtxImpl } from "@/types/languageImpl";
import { UnorderedListImpl } from "@/types/unorderedListType";
import Link from "next/link";
import { use, type ReactNode } from "react";

type UnorderedListProps = {
  items?: UnorderedListImpl;
  children?: ReactNode;
};

const UnorderedList: React.FC<UnorderedListProps> = ({ items, children }) => {
  const { localizationRouter } = use<LanguageCtxImpl>(LanguageContext);

  const itemsMapped = items?.topics?.map((item) => (
    <li key={item.link} tabIndex={0}>
      <Link
        href={`/${localizationRouter}/${item.link}`}
        aria-label={item.subtitle}
        tabIndex={0}
      >
        {item.subtitle}
      </Link>
    </li>
  ));

  return (
    <div
      className="w-48 leading-8 flex flex-col justify-center"
      aria-label={items?.title || "Information list"}
      tabIndex={0}
    >
      {items && <h6 className="font-bold" tabIndex={0}>{items.title}</h6>}
      <ul
        className="w-48 leading-8 flex flex-col justify-center"
        aria-label={items?.title ? `${items.title} topics` : "List topics"}
      >
        {children}
        {items && itemsMapped}
      </ul>
    </div>
  );
};

export default UnorderedList;
