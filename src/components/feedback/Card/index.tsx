import Image, { StaticImageData } from "next/image";
import { useState, type ReactNode } from "react";
import { BiArrowFromLeft } from "react-icons/bi";

interface CardProps {
  children?: ReactNode;
  img?: StaticImageData;
  icon?: ReactNode;
  title: string;
  body?: string;
  badge?: string;
  features?: string[];
  variant?: "default" | "expandable" | "joke";
  onExplore?: () => void;
  jokeSetup?: string;
  jokePunchline?: string;
  jokeType?: string;
}

const renderFeatures = (
  features: string[],
  onExplore?: () => void,
  title?: string
) => (
  <div>
    <div>Separator</div>
    <div>
      {features.map((feature, index) => (
        <div key={index}>
          <div aria-hidden="true">•</div>
          <span>{feature}</span>
        </div>
      ))}
    </div>
    {onExplore && (
      <button
        onClick={(e) => {
          e.stopPropagation();
          onExplore();
        }}
        aria-label={`Explore ${title}`}
      >
        Explore {title}
      </button>
    )}
  </div>
);

const Card = ({
  img,
  icon,
  title,
  body,
  badge,
  features,
  children,
  variant = "default",
  onExplore,
  jokeSetup,
  jokePunchline,
  jokeType,
}: CardProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleCardClick = () => {
    if (variant === "expandable") {
      setIsExpanded(!isExpanded);
    }
  };

  const renderExpandable = () => (
    <article
      onClick={handleCardClick}
      tabIndex={0}
      aria-label={
        title +
        (badge ? `, ${badge}` : "") +
        (isExpanded ? ", expanded" : ", collapsed")
      }
      role="button"
      aria-expanded={isExpanded}
    >
      <header>
        <div>
          {icon && <div aria-hidden="true">{icon}</div>}
          <div>
            <h6>{title}</h6>
            {badge && <span>{badge}</span>}
          </div>
        </div>
        <BiArrowFromLeft aria-hidden="true" />
      </header>
      <div>
        <p>{body}</p>
        {isExpanded && features && renderFeatures(features, onExplore, title)}
      </div>
    </article>
  );

  const renderJoke = () => (
    <article tabIndex={0} aria-label={title}>
      {title && <h6>{title}</h6>}
      {jokeType === "twopart" ? (
        <>
          <p>{jokeSetup || body}</p>
          {jokePunchline && <p>{jokePunchline}</p>}
        </>
      ) : (
        <p>{jokeSetup}</p>
      )}
      {badge && <span>{badge}</span>}
      {children && <div>{children}</div>}
    </article>
  );

  const renderDefault = () => (
    <article tabIndex={0} aria-label={title}>
      {img && <Image src={img} alt={title || "Card image"} />}
      <div>
        {icon && <div aria-hidden="true">{icon}</div>}
        <div>
          <h6>{title}</h6>
          {body && <p>{body}</p>}
          {badge && <span>{badge}</span>}
        </div>
      </div>
      {children && <div>{children}</div>}
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
