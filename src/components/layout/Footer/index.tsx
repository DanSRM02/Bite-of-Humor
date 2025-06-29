"use client";

import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import UnorderedList from "@/components/dataDisplay/unorderedList";
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
         
      >
        <article
          className="flex flex-col justify-around"
          aria-label="Brand and social links"
           
        >
          <h5 className="font-bold"  >{t("footer.brandName")}</h5>
          <div
            className="flex opacity-50 gap-4"
            aria-label="Social media links"
             
          >
            <Link
              href={"https://instagram.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
               
            >
              <FaInstagram size={20} aria-hidden="true" />
            </Link>
            <Link
              href={"https://facebook.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
               
            >
              <FaFacebook size={20} aria-hidden="true" />
            </Link>
            <Link
              href={"https://youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
               
            >
              <FaYoutube size={20} aria-hidden="true" />
            </Link>
          </div>
          <p  >
            {t("footer.copyright", {
              year: currentYear,
            })}
          </p>
        </article>

        <article
          className="flex flex-wrap justify-end gap-4"
          aria-label="Information links"
           
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
