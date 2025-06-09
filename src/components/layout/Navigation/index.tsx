"use client";

import { useTranslation } from "react-i18next";
import Link from "next/link";

const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <header aria-label="Main site navigation" tabIndex={0}>
        <h5 tabIndex={0}>Bite of Humor</h5>
        <nav aria-label="Primary navigation">
          <ul>
            <li>
              <Link
                href={"."}
                // className={(isActive) => activeClass(isActive)}
                aria-label={t("HeaderNavigation.navItems.home")}
                tabIndex={0}
              >
                {t("HeaderNavigation.navItems.home")}
              </Link>
            </li>
            <li>
              <Link
                href={"sign-up"}
                // className={(isActive) => activeClass(isActive)}
                aria-label={t("HeaderNavigation.navItems.signUp")}
                tabIndex={0}
              >
                {t("HeaderNavigation.navItems.signUp")}
              </Link>
            </li>
            <li>
              <Link
                href={"log-in"}
                // className={(isActive) => activeClass(isActive)}
                aria-label={t("HeaderNavigation.navItems.logIn")}
                tabIndex={0}
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
