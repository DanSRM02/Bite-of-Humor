"use client";
import { Url } from "next/dist/shared/lib/router/router";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { formatText } from "@/utils/verifyTextFormat";
import { Icon } from "@/components/feedback/icon";
import arrowLeftLong from '@iconify-icons/fa6-solid/arrow-left-long';

type LeadInProps = {
  heading: string;
  paragraph: string;
  variant?: "primary" | "secondary" | "tertiary" | "fourth";
  textLink?: string;
  redirect?: Url;
  isTextRaw?: boolean;
};
const LeadIn = ({
  heading = "common.none",
  paragraph = "common.none",
  redirect = "",
  textLink = "common.none",
  variant = "primary",
  isTextRaw = false,
}: LeadInProps) => {
  const t = useTranslations();
  const formattedTextHeading = formatText(isTextRaw, heading, t);
  const formattedTextParragraph = formatText(isTextRaw, paragraph, t);
  const formattedTextLink = formatText(isTextRaw, textLink, t);

  const renderSecondary = () => {
    return (
      <article className="flex flex-col flex-wrap">
        <h5 className="max-w-[37rem] mt-4 sm:mt-6 md:mt-7 font-bold text-lg sm:text-xl">
          {formattedTextHeading}
        </h5>
        <p className="max-w-[45rem] text-sm sm:text-base leading-relaxed">{formattedTextParragraph}</p>
      </article>
    );
  };

  const renderTertiary = () => {
    return (
      <article className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-26 flex-wrap">
        <h2 className="max-w-[37rem] mt-4 sm:mt-6 md:mt-7 font-bold text-xl sm:text-2xl md:text-3xl">
          {formattedTextHeading}
          <br />
          {formattedTextParragraph}
        </h2>

        <span className="bg-white py-2 hover:text-white duration-300">
          <Link
            className="hover:bg-black p-3 rounded transition-colors duration-300 text-sm sm:text-base"
            href={redirect}
          >
            {formattedTextLink}
          </Link>
        </span>
      </article>
    );
  };

  const renderDefault = () => {
    return (
      <article className="flex flex-col flex-wrap mb-6 sm:mb-8 md:mb-10">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl mb-3 sm:mb-4">
          {formattedTextHeading}
        </h1>
        <p className="max-w-[45rem] text-sm sm:text-base md:text-lg leading-relaxed">
          {formattedTextParragraph}
        </p>
      </article>
    );
  };

  const renderFourth = () => {
    return (
      <span className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-15">
        <Link href={redirect} className="self-start sm:self-center">
          <Icon 
            icon={arrowLeftLong}
            size="1.5rem"
            className="hover:fill-secondary-bg hover:border-b-2 hover:border-secondary-bg sm:text-2xl"
          />
        </Link>
        <article className="flex flex-col flex-wrap">
          <h1 className="max-w-[37rem] mt-2 sm:mt-4 md:mt-7 font-bold text-xl sm:text-2xl md:text-3xl">
            {formattedTextHeading}
          </h1>
          <p className="max-w-[45rem] text-sm sm:text-base leading-relaxed">{formattedTextParragraph}</p>
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
