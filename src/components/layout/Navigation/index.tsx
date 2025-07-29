"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

type NavigationLink = {
  key: string; 
  href: string;
};

type NavigationProps = {
  links: NavigationLink[];
};

const Navigation = ({ links }: NavigationProps) => {
  const t = useTranslations("HeaderNavigation");

  return (
    <>
      <header
        className="flex justify-between py-[3.5em] px-[5em] "
        aria-label="Main site navigation"
      >
        <h5 className="font-bold">Bite of Humor</h5>
        <nav className="flex items-center" aria-label="Primary navigation">
          <ul className="flex gap-8">
            {links.map(link => (
              <li key={link.key} className="hover:text-white">
                <Link
                  href={link.href}
                  className="hover:bg-black p-3 rounded trasition-colors duration-300"
                  aria-label={t(link.key)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
