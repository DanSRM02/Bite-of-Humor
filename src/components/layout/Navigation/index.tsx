"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import Button from "@/components/inputs/button";
import AuthenticatedUserMenu from "@/components/feedback/userMenu";
import LanguageSelector from "@/components/inputs/languageSelector";

type NavigationLink = {
  key: string;
  href: string;
};

type NavigationProps = {
  links: NavigationLink[];
};

const Navigation = ({ links }: NavigationProps) => {
  const t = useTranslations("HeaderNavigation");
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigationClick = (href: string) => {
    router.push(href);
    setIsMenuOpen(false);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  const renderNavigationItems = (isMobile = false) => {
    return (
      <>
        {links.map((link) => (
          <li key={link.key}>
            <Button
              onClick={() => handleNavigationClick(link.href)}
              variant="secondary"
              size={isMobile ? "medium" : "small"}
              className={
                isMobile
                  ? "w-full text-left justify-start"
                  : "hover:bg-black hover:text-white text-sm lg:text-base"
              }
              aria-label={t(link.key)}
            >
              {t(link.key)}
            </Button>
          </li>
        ))}
        <LanguageSelector />

        <li>
          <AuthenticatedUserMenu
            isMobile={isMobile}
            onMenuClose={handleMenuClose}
          />
        </li>
      </>
    );
  };

  return (
    <>
      <header
        className="flex justify-between items-center py-3 px-4 sm:py-4 sm:px-6 md:py-6 md:px-8 lg:py-8 lg:px-12 xl:py-10 xl:px-20"
        aria-label="Main site navigation"
      >
        <Link href="/" aria-label="Go to homepage">
          <h5 className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
            Bite of Humor
          </h5>
        </Link>

        <nav
          className="hidden lg:flex items-center"
          aria-label="Primary navigation"
        >
          <ul className="flex gap-2 xl:gap-4 items-center">
            {renderNavigationItems(false)}
          </ul>
        </nav>

        <Button
          onClick={toggleMenu}
          variant="secondary"
          size="small"
          className="lg:hidden hover:bg-stone-100"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <Icon
            icon={isMenuOpen ? "lucide:x" : "lucide:menu"}
            width="1.25rem"
            height="1.25rem"
          />
        </Button>
      </header>

      {isMenuOpen && (
        <nav
          className="lg:hidden bg-white border-b border-stone-200 shadow-lg"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col p-3 sm:p-4 space-y-1">
            {renderNavigationItems(true)}
          </ul>
        </nav>
      )}
    </>
  );
};

export default Navigation;
