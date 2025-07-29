"use client";
import Button from "@/components/inputs/button";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useState, type ReactNode } from "react";
import { Icon } from "@iconify/react";
import { formatText } from "@/utils/verifyTextFormat";
import { flagConfig } from "@/utils/constants";

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
  isTextRaw?: boolean;
  jokePunchline?: string;
  jokeType?: string;
  className?: string;
  flags?: Record<string, boolean>;
};

const Card = ({
  img,
  className,
  icon,
  title = "common.none",
  body = "common.none",
  badge = "common.none",
  features,
  isTextRaw = false,
  config,
  children,
  variant = "default",
  flags = {},
  onExplore,
  jokeSetup,
  jokePunchline,
  jokeType,
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations();

  const formattedBadge = formatText(isTextRaw, badge, t, config);

  const handleCardClick = () => {
    if (variant === "expandable") {
      setIsExpanded(!isExpanded);
    }
  };

  const renderExpandable = () => (
    <article
      onClick={handleCardClick}
      aria-label={formatText(isTextRaw, title, t) || undefined}
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
              {formatText(isTextRaw, title, t)}
            </h6>
            <span className="inline-block bg-stone-100 text-stone-800 px-3 py-1 rounded-md text-sm font-medium">
              {formattedBadge}
            </span>
          </div>
        </div>
        <Icon 
          icon="bi:arrow-left-right"
          aria-hidden="true"
          className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
        />
      </header>
      <div className="flex-grow">
        <p className="text-base text-stone-600 leading-relaxed mb-4">
          {formatText(isTextRaw, body, t)}
        </p>
        {isExpanded && features && (
          <div className="flex flex-col gap-3 mt-4">
            <div className="h-px bg-stone-300 w-full"></div>
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-stone-500 rounded-full"></div>
                <span className="text-sm text-stone-700">
                  {formatText(isTextRaw, feature, t)}
                </span>
              </div>
            ))}
            {onExplore && (
              <Button
                onClick={() => {
                  onExplore();
                }}
                size="small"
                variant="secondary"
              >
                {`Explore ${formatText(isTextRaw, title, t)}`}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );
   
  const renderJoke = () => (
    <article
      className="bg-white p-6 rounded-lg relative"
    >      
      <div className="absolute top-2 right-2 flex gap-1">
        {Object.entries(flags)
          .filter(([_, isActive]) => isActive)
          .map(([flagName]) => {
            const config = flagConfig[flagName as keyof typeof flagConfig];
            return (
              <div
                key={`indicator-${flagName}`}
                className="h-5 w-5 rounded-full flex items-center justify-center border"
                style={{
                  backgroundColor: config.solidColor,
                  borderColor: config.borderColor,
                  borderWidth: 2,
                }}
                title={config.tooltip}
              >
                <Icon icon={config.iconComponent} className="text-xs text-white opacity-90" />
              </div>
            );
          })}
      </div>
      <h6 className="text-lg font-semibold text-stone-800 mb-2">{jokeSetup}</h6>
      {jokeType === "twopart" ? (
        <p className="text-base font-medium text-stone-800">{jokePunchline}</p>
      ) : (
        <p className="text-base font-semibold">{jokePunchline}</p>
      )}
      {badge && (
        <span className="inline-block bg-stone-100 text-stone-800 px-3 py-1 rounded-md text-sm font-medium mt-4">
          {badge}
        </span>
      )}
      {children && <div className={`${className}`}>{children}</div>}
    </article>
  );

  const renderDefault = () => (
    <article
      aria-label={formatText(isTextRaw, title, t) || undefined}
      className="bg-white border border-stone-200 p-6 rounded-lg "
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
          <h6 className="text-lg font-semibold text-stone-800">{formatText(isTextRaw, title, t)}</h6>
          <p className="text-base text-stone-700">{formatText(isTextRaw, body, t)}</p>
        </div>
      </div>
      {children && <div className={`${className}`}>{children}</div>}
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
