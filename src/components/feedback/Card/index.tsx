"use client";
import Button from "@/components/inputs/button";
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
      aria-label={title}
      role="button"
      aria-expanded={isExpanded}
      className={`flex flex-col pointer-course items-stretch bg-white rounded-lg p-8 border-2 transition-all duration-300 ${
        isExpanded ? "border-gray-800 shadow-xl" : "border-gray-300"
      }`}
    >
      <header className="flex justify-between items-start mb-4">
        <div className="flex items-center">
          {icon && (
            <div
              aria-hidden="true"
              className="flex items-center justify-center bg-gray-800 text-white p-4 rounded-md"
            >
              {icon}
            </div>
          )}
          <div className="ml-3">
            <h6 className="text-xl font-semibold text-gray-800 leading-snug">
              {title}
            </h6>
            {badge && (
              <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
                {badge}
              </span>
            )}
          </div>
        </div>
        <BiArrowFromLeft
          aria-hidden="true"
          className={`transition-transform ${isExpanded ? "rotate-90" : ""}`}
        />
      </header>
      <div className="flex-grow">
        <p className="text-base text-gray-600 leading-relaxed mb-4">{body}</p>
        {isExpanded && features && (
          <div className="flex flex-col gap-3 mt-4">
            <div className="h-px bg-gray-300 w-full"></div>
            {features.map((feature, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                <span className="text-sm text-gray-700">{feature}</span>
              </div>
            ))}
            {onExplore && (
              <Button
                onClick={() => {
                  onExplore();
                }}
                size="small"
                variant="outline"
                aria-label={`Explore ${title}`}
                tabIndex={0}                
              >
                Explore {title}
              </Button>
            )}
          </div>
        )}
      </div>
    </article>
  );

  const renderJoke = () => (
    <article
      tabIndex={0}
      aria-label={title}
      className="bg-white border border-gray-200 p-6 rounded-lg"
    >
      {title && (
        <h6 className="text-lg font-semibold text-gray-800 mb-2">{title}</h6>
      )}
      {jokeType === "twopart" ? (
        <>
          <p className="text-base text-gray-700 mb-2">{jokeSetup || body}</p>
          {jokePunchline && (
            <p className="text-base font-medium text-gray-800">
              {jokePunchline}
            </p>
          )}
        </>
      ) : (
        <p className="text-base text-gray-700">{jokeSetup}</p>
      )}
      {badge && (
        <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium mt-4">
          {badge}
        </span>
      )}
      {children && <div className="mt-4">{children}</div>}
    </article>
  );

  const renderDefault = () => (
    <article
      tabIndex={0}
      aria-label={title}
      className="bg-white border border-gray-200 p-6 rounded-lg"
    >
      {img && (
        <Image
          src={img}
          alt={title || "Card image"}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <div className="flex flex-col gap-4">
        {icon && (
          <div
            aria-hidden="true"
            className="flex items-center justify-center bg-gray-800 text-white p-4 rounded-md"
          >
            {icon}
          </div>
        )}
        <div className="flex flex-col gap-2">
          <h6 className="text-lg font-semibold text-gray-800">{title}</h6>
          {body && <p className="text-base text-gray-700">{body}</p>}
          {badge && (
            <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-md text-sm font-medium">
              {badge}
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
