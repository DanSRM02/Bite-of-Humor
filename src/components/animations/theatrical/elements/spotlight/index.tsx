import React from "react";
import { TheatricalType } from "../../TheatricalBackground";

type SpotlightProps = {
  spotlightRef: React.RefObject<HTMLDivElement | null>;
  type: TheatricalType;
};

const SPOTLIGHT_STYLES = {
  writersroom: {
    background: "radial-gradient(circle, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
    filter: "blur(8px) md:blur(12px)",
  },
  stage: {
    background: "radial-gradient(circle, rgba(255,255,0,0.2) 0%, rgba(255,255,255,0.1) 40%, transparent 70%)",
    filter: "blur(8px) md:blur(12px)",
  },
} as const;

const BASE_CLASSES = "absolute top-0 left-1/2 transform -translate-x-1/2 w-48 h-48 sm:w-64 sm:h-64 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-full z-10 pointer-events-none";

const Spotlight = ({ spotlightRef, type }: SpotlightProps) => {
  if (type === "backstage") return null;

  const spotlightStyle = SPOTLIGHT_STYLES[type as keyof typeof SPOTLIGHT_STYLES];

  return (
    <div
      ref={spotlightRef}
      className={BASE_CLASSES}
      style={spotlightStyle}
    />
  );
};

export default Spotlight;
