import { ReactNode } from "react";

type CardGridProps = {
  children: ReactNode;
  ariaLabel: string;
};
const CardGrid = ({ children, ariaLabel }: CardGridProps) => {
  return (
    <article
      aria-label={ariaLabel}
      className="grid gap-10 grid-cols-(--auto-cols)"
    >
      {children}
    </article>
  );
};

export default CardGrid;
