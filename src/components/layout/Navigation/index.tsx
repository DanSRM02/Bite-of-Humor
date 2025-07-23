"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

const Navigation = () => {
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
            <li className="hover:text-white">
              <Link
                href={"medium"}
                className="hover:bg-black p-3 rounded trasition-colors duration-300"
                aria-label={t("navItems.home")}
              >
                {t("navItems.home")}
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                href={"sign-up"}
                className="hover:bg-black p-3 rounded trasition-colors duration-300"
                aria-label={t("navItems.signUp")}
              >
                {t("navItems.signUp")}
              </Link>
            </li>
            <li className="hover:text-white">
              <Link
                href={"log-in"}
                className="hover:bg-black p-3 rounded trasition-colors duration-300"
                aria-label={t("navItems.logIn")}
              >
                {t("navItems.logIn")}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;
