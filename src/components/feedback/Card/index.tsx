"use client";
import Button from "@/components/inputs/button";
import { useTranslations } from "next-intl";
import Image, { StaticImageData } from "next/image";
import { useState, type ReactNode } from "react";
import { Icon } from "@iconify/react";
import { formatText } from "@/utils/verifyTextFormat";
import { flagConfig } from "@/utils/constants";

type CardVariant = "default" | "expandable" | "joke";

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
  variant?: CardVariant;
  onExplore?: () => void;
  jokeSetup?: string;
  isTextRaw?: boolean;
  jokePunchline?: string;
  jokeType?: string;
  className?: string;
  flags?: Record<string, boolean>;
};

const CARD_STYLES = {
  base: {
    default: "bg-white border border-stone-200 p-4 sm:p-6 rounded-lg overflow-hidden",
    expandable: "flex flex-col cursor-pointer items-stretch bg-white rounded-lg p-4 sm:p-6 lg:p-8 border-2 transition-all duration-300 overflow-hidden",
    joke: "bg-white p-3 sm:p-4 md:p-6 rounded-lg relative overflow-hidden min-h-0 max-w-full",
  },
  expandableBorder: {
    expanded: "border-stone-800 shadow-xl",
    collapsed: "border-stone-300",
  },
  header: {
    container: "flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 sm:gap-4 mb-4",
    iconWrapper: "flex items-center justify-center bg-stone-800 text-white p-2 sm:p-3 lg:p-4 rounded-md flex-shrink-0",
    content: "ml-2 sm:ml-3 min-w-0 flex-1",
    title: "text-lg sm:text-xl font-semibold text-stone-800 leading-snug break-words",
    badge: "inline-block bg-stone-100 text-stone-800 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm font-medium mt-1 sm:mt-0",
  },
  text: {
    body: "text-sm sm:text-base text-stone-600 leading-relaxed mb-3 sm:mb-4",
    feature: "text-xs sm:text-sm text-stone-700 leading-relaxed",
  },
  joke: {
    title: "text-lg font-medium text-gray-900 mb-3 pr-8 leading-relaxed",
    punchline: "text-base text-gray-700 pr-8 leading-relaxed",
    punchlineSingle: "text-base text-gray-700 pr-8 leading-relaxed",
    badge: "inline-block bg-gray-100 text-gray-800 px-2 py-1 rounded text-xs font-medium mt-4",
    flagContainer: "absolute top-3 right-3 flex gap-1 flex-wrap max-w-[100px]",
    flag: "h-4 w-4 rounded-full flex items-center justify-center text-white text-xs",
    flagIcon: "text-xs",
  },
  default: {
    image: "w-full h-32 sm:h-40 md:h-48 object-cover rounded-md mb-3 sm:mb-4",
    container: "flex flex-col gap-3 sm:gap-4",
    textGroup: "flex flex-col gap-1 sm:gap-2",
    title: "text-base sm:text-lg font-semibold text-stone-800 leading-tight",
    body: "text-sm sm:text-base text-stone-700 leading-relaxed",
  },
  shared: {
    children: "mt-3 sm:mt-4",
    separator: "h-px bg-stone-300 w-full",
    featureContainer: "flex flex-col gap-2 sm:gap-3 mt-3 sm:mt-4",
    featureItem: "flex items-start gap-2 sm:gap-3",
    bullet: "w-1 h-1 sm:w-1.5 sm:h-1.5 bg-stone-500 rounded-full flex-shrink-0 mt-2 sm:mt-1.5",
    arrow: "transition-transform text-lg sm:text-xl flex-shrink-0 self-start sm:self-center",
    button: "mt-2 sm:mt-3 self-start",
    buttonText: "text-xs sm:text-sm",
  },
} as const;

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
  const baseStyles = CARD_STYLES.base[variant];

  const handleCardClick = () => {
    if (variant === "expandable") {
      setIsExpanded(!isExpanded);
    }
  };

  const getActiveFlags = () => 
    Object.entries(flags).filter(([, isActive]) => isActive);

  const renderFlag = (flagName: string) => {
    const flagConfiguration = flagConfig[flagName as keyof typeof flagConfig];
    
    return (
      <div
        key={`flag-${flagName}`}
        className={CARD_STYLES.joke.flag}
        style={{
          backgroundColor: flagConfiguration.solidColor,
          borderColor: flagConfiguration.borderColor,
          borderWidth: 2,
        }}
        title={flagConfiguration.tooltip}
      >
        <Icon 
          icon={flagConfiguration.iconComponent} 
          className={CARD_STYLES.joke.flagIcon}
        />
      </div>
    );
  };

  const renderFlags = () => {
    const activeFlags = getActiveFlags();
    
    if (activeFlags.length === 0) return null;

    return (
      <div className={CARD_STYLES.joke.flagContainer}>
        {activeFlags.map(([flagName]) => renderFlag(flagName))}
      </div>
    );
  };

  const renderFeatures = () => (
    <div className={CARD_STYLES.shared.featureContainer}>
      <div className={CARD_STYLES.shared.separator}></div>
      {features?.map((feature) => (
        <div key={feature} className={CARD_STYLES.shared.featureItem}>
          <div className={CARD_STYLES.shared.bullet}></div>
          <span className={CARD_STYLES.text.feature}>
            {formatText(isTextRaw, feature, t)}
          </span>
        </div>
      ))}
      {onExplore && (
        <Button
          onClick={onExplore}
          size="small"
          variant="secondary"
          className={CARD_STYLES.shared.button}
        >
          <span className={CARD_STYLES.shared.buttonText}>
            {`Explore ${formatText(isTextRaw, title, t)}`}
          </span>
        </Button>
      )}
    </div>
  );

  const renderChildren = () => children && (
    <div className={`${CARD_STYLES.shared.children} ${className}`}>
      {children}
    </div>
  );

  const renderExpandable = () => {
    const borderStyle = isExpanded 
      ? CARD_STYLES.expandableBorder.expanded 
      : CARD_STYLES.expandableBorder.collapsed;

    return (
      <article
        onClick={handleCardClick}
        aria-label={formatText(isTextRaw, title, t) || undefined}
        role="button"
        aria-expanded={isExpanded}
        className={`${baseStyles} ${borderStyle}`}
      >
        <header className={CARD_STYLES.header.container}>
          <div className="flex items-center">
            <div aria-hidden="true" className={CARD_STYLES.header.iconWrapper}>
              {icon}
            </div>
            <div className={CARD_STYLES.header.content}>
              <h6 className={CARD_STYLES.header.title}>
                {formatText(isTextRaw, title, t)}
              </h6>
              <span className={CARD_STYLES.header.badge}>
                {formattedBadge}
              </span>
            </div>
          </div>
          <Icon 
            icon="bi:arrow-left-right"
            aria-hidden="true"
            className={`${CARD_STYLES.shared.arrow} ${isExpanded ? "rotate-90" : ""}`}
          />
        </header>
        <div className="flex-grow">
          <p className={CARD_STYLES.text.body}>
            {formatText(isTextRaw, body, t)}
          </p>
          {isExpanded && features && renderFeatures()}
        </div>
      </article>
    );
  };
   
  const renderJoke = () => (    
    <article className={baseStyles}>
      {renderFlags()}
      <h6 className={CARD_STYLES.joke.title}>
        {jokeSetup || t("common.none")}
      </h6>
      {jokeType === "twopart" ? (
        <p className={CARD_STYLES.joke.punchline}>
          {jokePunchline || t("common.none")}
        </p>
      ) : (
        <p className={CARD_STYLES.joke.punchlineSingle}>
          {jokePunchline|| t("common.none")}
        </p>
      )}
      {badge && (
        <span className={CARD_STYLES.joke.badge}>
          {formattedBadge}
        </span>
      )}
      {renderChildren()}
    </article>
  );

  const renderDefault = () => (
    <article
      aria-label={formatText(isTextRaw, title, t) || undefined}
      className={baseStyles}
    >
      {img && (
        <Image
          src={img}
          alt={t(title || "Card image")}
          className={CARD_STYLES.default.image}
        />
      )}
      <div className={CARD_STYLES.default.container}>
        <div className={CARD_STYLES.default.textGroup}>
          <h6 className={CARD_STYLES.default.title}>
            {formatText(isTextRaw, title, t)}
          </h6>
          <p className={CARD_STYLES.default.body}>
            {formatText(isTextRaw, body, t)}
          </p>
        </div>
      </div>
      {renderChildren()}
    </article>
  );

  const RENDER_MAP = {
    expandable: renderExpandable,
    joke: renderJoke,
    default: renderDefault,
  } as const;

  return RENDER_MAP[variant]();
};

export default Card;
