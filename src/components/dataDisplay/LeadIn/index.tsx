"use client";
import { Url } from "next/dist/shared/lib/router/router";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { formatText } from "@/utils/verifyTextFormat";

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
      <article
        className="flex flex-col flex-wrap"        
      >
        <h5 className="max-w-[37rem] mt-[1.76rem] font-bold">
          {formattedTextHeading}
        </h5>
        <p className="max-w-[45rem]">{formattedTextParragraph}</p>
      </article>
    );
  };

  const renderTertiary = () => {
    return (
      <article
        className="flex items-center gap-26 flex-wrap"        
      >
        <h2 className="max-w-[37rem] mt-[1.76rem] font-bold">
          {formattedTextHeading}
          <br />
          {formattedTextParragraph}
        </h2>

        <span className=" bg-white py-2 hover:text-white duration-300">
          <Link
            className="hover:bg-black p-3 rounded trasition-colors duration-300 "
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
      <article
        className="flex flex-col flex-wrap"      
      >
        <h1 className="max-w-[37rem] mt-[1.76rem] font-bold">
          {formattedTextHeading}
        </h1>
        <p className="max-w-[45rem]">{formattedTextParragraph}</p>
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
        <article
          className="flex flex-col flex-wrap"          
        >
          <h1 className="max-w-[37rem] mt-[1.76rem] font-bold">
            {formattedTextHeading}
          </h1>
          <p className="max-w-[45rem]">{formattedTextParragraph}</p>
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
