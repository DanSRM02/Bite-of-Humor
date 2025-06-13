import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  ariaLabel: string;
};
const CardGrid = ({ children, ariaLabel }: CardGridProps) => {
  return (
    <article
      aria-label={ariaLabel}
      className="grid gap-10 grid-cols-[repeat(auto-fit,minmax(20rem,1fr))]"
    >
      {children}
    </article>
  );
};

export default CardGrid;
