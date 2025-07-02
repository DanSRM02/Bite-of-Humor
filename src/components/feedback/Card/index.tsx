"use client";
import Button from "@/components/inputs/button";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useFormatter } from "next-intl";
import { useState, type ReactNode } from "react";
import { BiArrowFromLeft } from "react-icons/bi";

export type CardProps = {
  children?: ReactNode;
  img?: StaticImageData;
  icon?: ReactNode;
  title?: string;
  body?: string;
  badge?: string;
  config?: {
    value: number | bigint;
  };
  features?: string[];
  variant?: "default" | "expandable" | "joke";
  onExplore?: () => void;
  jokeSetup?: string;
  jokePunchline?: string;
  jokeType?: string;
};

const Card = ({
  img,
  icon,
  title = "common.none",
  body = "common.none",
  badge,
  features,
  config,
  children,
  variant = "default",
  onExplore,
  jokeSetup = "common.none",
  jokePunchline = "common.none",
  jokeType = "common.none",
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations();
  const { number } = useFormatter();
  let formattedBadge: string;

  if (config?.value != null && badge) {
    formattedBadge = number(config.value, "currency" );
  } else if (badge) {
    formattedBadge = t(badge);
  }

  const handleCardClick = () => {
    if (variant === "expandable") {
      setIsExpanded(!isExpanded);
    }
  };

  const renderExpandable = () => (
    <article
      onClick={handleCardClick}
      aria-label={t(title)}
      role="button"
      aria-expanded={isExpanded}
      className={`flex flex-col cursor-pointer items-stretch bg-white rounded-lg p-8 border-2 transition-all duration-300 ${
        isExpanded ? "border-stone-800 shadow-xl" : "border-stone-300"
      }`}
    >
      <header className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          <div
            aria-hidden="true"
            className="flex items-center justify-center bg-stone-800 text-white p-4 rounded-md"
          >
            {icon}
          </div>

          <div className="ml-3">
            <h6 className="text-xl font-semibold text-stone-800 leading-snug">
              {t(title)}
            </h6>
            <span className="inline-block bg-stone-100 text-stone-800 px-3 py-1 rounded-md text-sm font-medium">
              {formattedBadge}
            </span>
          </div>
        </div>
        <BiArrowFromLeft
          aria-hidden="true"
          className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
        />
      </header>
      <div className="flex-grow">
        <p className="text-base text-stone-600 leading-relaxed mb-4">
          {t(body)}
        </p>
        {isExpanded && features && (
          <div className="flex flex-col gap-3 mt-4">
            <div className="h-px bg-stone-300 w-full"></div>
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                <span className="text-sm text-stone-700">{t(feature)}</span>
              </div>
            ))}
            {onExplore && (
              <Button
                onClick={() => {
                  onExplore();
                }}
                size="small"
                variant="outline"
              >
                {`Explore ${t(title)}`}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );

  const renderJoke = () => (
    <article className="bg-white border border-stone-200 p-6 rounded-lg">
      <h6 className="text-lg font-semibold text-stone-800 mb-2">{jokeSetup}</h6>

      {jokeType === "twopart" ? (
        <p className="text-base font-medium text-stone-800">{jokePunchline}</p>
      ) : (
        <p className="text-base font-semibold">{jokePunchline}</p>
      )}
      <span className="inline-block bg-stone-100 text-stone-800 px-3 py-1 rounded-md text-sm font-medium mt-4">
        {badge}
      </span>

      {children && <div className="mt-4">{children}</div>}
    </article>
  );

  const renderDefault = () => (
    <article
      aria-label={t(title)}
      className="bg-white border border-stone-200 p-6 rounded-lg"
    >
      {img && (
        <Image
          src={img}
          alt={t(title || "Card image")}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold text-stone-800">{t(title)}</h6>
          <p className="text-base text-stone-700">{t(body)}</p>
          {badge && (
            <span className="inline-block bg-stone-100 text-stone-800 px-3 py-1 rounded-md text-sm font-medium">
              {t(badge)}
            </span>
          )}
        </div>
      </div>
      {children && <div className="mt-4">{children}</div>}
    </article>
  );

  switch (variant) {
    case "expandable":
      return renderExpandable();
    case "joke":
      return renderJoke();
    default:
      return renderDefault();
  }
};

export default Card;
