"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { Icon } from "@iconify/react";

type NavigationLink = {
  key: string;
  href: string;
};

type NavigationProps = {
  links: NavigationLink[];
};

const Navigation = ({ links }: NavigationProps) => {
  const t = useTranslations("HeaderNavigation");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className="flex justify-between items-center py-4 px-4 sm:py-6 sm:px-6 md:py-8 md:px-8 lg:py-12 lg:px-12 xl:py-14 xl:px-20"
        aria-label="Main site navigation"
      >
        <Link href={"/"}>
          <h5 className="font-bold text-lg sm:text-xl">Bite of Humor</h5>
        </Link>

        <nav
          className="hidden md:flex items-center"
          aria-label="Primary navigation"
        >
          <ul className="flex gap-4 lg:gap-8">
            {links.map((link) => (
              <li key={link.key} className="hover:text-white">
                <Link
                  href={link.href}
                  className="hover:bg-black p-2 lg:p-3 rounded transition-colors duration-300 text-sm lg:text-base"
                  aria-label={t(link.key)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded hover:bg-gray-100 transition-colors duration-300"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Icon
            icon={isMenuOpen ? "lucide:x" : "lucide:menu"}
            width="1.5rem"
            height="1.5rem"
          />
        </button>
      </header>

      {isMenuOpen && (
        <nav
          className="md:hidden bg-white border-b border-gray-200 shadow-lg"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col p-4 space-y-2">
            {links.map((link) => (
              <li key={link.key}>
                <Link
                  href={link.href}
                  className="block p-3 rounded hover:bg-gray-100 transition-colors duration-300"
                  aria-label={t(link.key)}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t(link.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
