"use client";
import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Heading from "../heading";
import { FaArrowLeftLong } from "react-icons/fa6";

type LeadInProps = {
  heading: string;
  paragraph: string;
  variant?: "primary" | "secondary" | "tertiary" | string;
  textLink?: string;
  redirect?: Url;
};
const LeadIn = ({
  heading,
  paragraph,
  redirect = "",
  textLink,
  variant = "primary",
}: LeadInProps) => {
  const { t } = useTranslation();

  const renderSecondary = () => {
    return (
      <article className="flex flex-col flex-wrap" aria-label={t(heading)}>
        <Heading level={5} className="max-w-[37rem] mt-[1.76rem] font-bold">
          {heading}
        </Heading>
        <p className="max-w-[45rem]">{t(paragraph)}</p>
      </article>
    );
  };

  const renderTertiary = () => {
    return (
      <article
        className="flex items-center gap-26 flex-wrap"
        aria-label={t(heading)}
      >
        <Heading level={2} className="max-w-[37rem] mt-[1.76rem] font-bold">
          {t(heading)}
          <br />
          {t(paragraph)}
        </Heading>

        <span className=" bg-white py-2 hover:text-white duration-300">
          <Link
            className="hover:bg-black p-3 rounded trasition-colors duration-300 "
            href={redirect}
          >
            {t(textLink || "")}
          </Link>
        </span>
      </article>
    );
  };

  const renderDefault = () => {
    return (
      <article className="flex flex-col flex-wrap" aria-label={t(heading)}>
        <Heading className="max-w-[37rem] mt-[1.76rem] font-bold">
          {heading}
        </Heading>
        <p className="max-w-[45rem]">{t(paragraph)}</p>
      </article>
    );
  };

  const renderFourth = () => {
    return (
      <span className="flex flex-row items-center gap-15">
        <Link href={redirect}>
          <FaArrowLeftLong
            size={"2rem"}
            className="hover:fill-secondary-bg hover:border-b-2 hover:border-secondary-bg"
          />
        </Link>
        <article className="flex flex-col flex-wrap" aria-label={t(heading)}>
          <Heading className="max-w-[37rem] mt-[1.76rem] font-bold">
            {heading}
          </Heading>
          <p className="max-w-[45rem]">{t(paragraph)}</p>
        </article>
      </span>
    );
  };

  switch (variant) {
    case "secondary":
      return renderSecondary();
    case "tertiary":
      return renderTertiary();
    case "fourth":
      return renderFourth();
    default:
      return renderDefault();
  }
};

export default LeadIn;
