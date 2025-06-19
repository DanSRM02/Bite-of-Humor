"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <header
        className="flex justify-between py-[3.5em] px-[5em] "
        aria-label="Main site navigation"
         
      >
        <h5 className="font-bold"  >
          Bite of Humor
        </h5>
        <nav className="flex items-center" aria-label="Primary navigation">
          <ul className="flex gap-8">
            <li className="hover:text-white">
              <Link
                href={"medium"}
                className="hover:bg-black p-3 rounded trasition-colors duration-300"
                aria-label={t("HeaderNavigation.navItems.home")}                 
              >
                {t("HeaderNavigation.navItems.home")}
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                href={"sign-up"}
                className="hover:bg-black p-3 rounded trasition-colors duration-300"
                aria-label={t("HeaderNavigation.navItems.signUp")}                 
              >
                {t("HeaderNavigation.navItems.signUp")}
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                href={"log-in"}
                className="hover:bg-black p-3 rounded trasition-colors duration-300"
                aria-label={t("HeaderNavigation.navItems.logIn")}                 
              >
                {t("HeaderNavigation.navItems.logIn")}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
