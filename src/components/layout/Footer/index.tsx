import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import UnorderedList from "@/components/dataDisplay/UnorderedList";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { UnorderedListImpl } from "@/types/unorderedListType";

const Footer = () => {
  const t = useTranslations();
  const currentYear = new Date().getFullYear();
  const copyrigthTest = t("footer.copyright", {
    year: currentYear,
  });
  const linkGroups = t.raw("footer.linkGroups") as UnorderedListImpl[];  

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
          <h5 className="font-bold">{t("footer.brandName")}</h5>
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
          <p>{copyrigthTest}</p>
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
