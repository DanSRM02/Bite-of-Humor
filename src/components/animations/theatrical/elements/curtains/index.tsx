import React from "react";

type CurtainsProps = {
  leftRef: React.RefObject<HTMLDivElement>;
  rightRef: React.RefObject<HTMLDivElement>;
};

const CURTAIN_STYLES = {
  background: "repeating-linear-gradient(90deg, #292524 0px, #292524 2px, #1c1917 2px, #1c1917 4px)",
} as const;

const CURTAIN_CLASSES = {
  left: "absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-stone-800 to-stone-700 z-20",
  right: "absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-stone-800 to-stone-700 z-20",
} as const;

const Curtains = ({ leftRef, rightRef }: CurtainsProps) => {
  return (
    <>
      <div
        ref={leftRef}
        className={CURTAIN_CLASSES.left}
        style={CURTAIN_STYLES}
      />
      <div
        ref={rightRef}
        className={CURTAIN_CLASSES.right}
        style={CURTAIN_STYLES}
      />
    </>
  );
};

export default Curtains;
