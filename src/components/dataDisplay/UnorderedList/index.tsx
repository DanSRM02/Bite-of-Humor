// import classes from "./UnorderedList.module.scss";
import { LanguageContext } from "@/contexts/languageContext";
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
    <li key={item.link}  >
      <Link
        href={`/${localizationRouter}/${item.link}`}
        aria-label={item.subtitle}
         
      >
        {item.subtitle}
      </Link>
    </li>
  ));

  return (
    <div
      className="w-48 leading-8 flex flex-col justify-center"
      aria-label={items?.title || "Information list"}
       
    >
      {items && <h6 className="font-bold"  >{items.title}</h6>}
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
