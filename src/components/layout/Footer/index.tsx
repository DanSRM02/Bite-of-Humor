"use client";

// import classes from "./Footer.module.scss";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import UnorderedList from "@/components/dataDisplay/UnorderedList";
import { UnorderedListImpl } from "@/types/unorderedListType";
import Link from "next/link";
import { useTranslation } from "react-i18next";

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  const linkGroups = t("footer.linkGroups", {
    returnObjects: true,
  }) as UnorderedListImpl[];

  return (
    <>
      <footer
        className="flex justify-between p-12 gap-10"
        aria-label="Site footer"
        tabIndex={0}
      >
        <article
          className="flex flex-col justify-around"
          aria-label="Brand and social links"
          tabIndex={0}
        >
          <h5 className="font-bold" tabIndex={0}>{t("footer.brandName")}</h5>
          <div
            className="flex opacity-50 gap-4"
            aria-label="Social media links"
            tabIndex={0}
          >
            <Link
              href={"https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              tabIndex={0}
            >
              <FaInstagram size={20} aria-hidden="true" />
            </Link>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              tabIndex={0}
            >
              <FaFacebook size={20} aria-hidden="true" />
            </Link>
            <Link
              href={"https://youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              tabIndex={0}
            >
              <FaYoutube size={20} aria-hidden="true" />
            </Link>
          </div>
          <p tabIndex={0}>
            {t("footer.copyright", {
              year: currentYear,
            })}
          </p>
        </article>

        <article
          className="flex flex-wrap justify-end gap-4"
          aria-label="Information links"
          tabIndex={0}
        >
          {linkGroups &&
            linkGroups.map((listData, index) => (
              <UnorderedList key={index} items={listData} />
            ))}
        </article>
      </footer>
    </>
  );
};

export default Footer;
