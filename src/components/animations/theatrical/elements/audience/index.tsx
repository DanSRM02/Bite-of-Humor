import React from "react";

type AudienceProps = {
  audienceRef: React.RefObject<HTMLDivElement | null>;
};

const AUDIENCE_STYLES = {
  background: "repeating-linear-gradient(90deg, #44403c 0px, #44403c 8px, #57534e 8px, #57534e 12px, #44403c 12px, #44403c 20px)",
  clipPath: "polygon(0 100%, 100% 100%, 95% 20%, 90% 0, 80% 5%, 70% 0, 60% 8%, 50% 0, 40% 5%, 30% 0, 20% 8%, 10% 0, 5% 20%)",
} as const;

const Audience = ({ audienceRef }: AudienceProps) => {
  return (
    <div
      ref={audienceRef}
      className="absolute bottom-0 left-0 w-full h-8 sm:h-12 md:h-16 lg:h-20 z-15 pointer-events-none"
      style={AUDIENCE_STYLES}
    />
  );
};

export default Audience;
