"use client";
import { useEffect, useRef } from "react";
import {
  Curtains,
  Spotlight,
  Audience,
  WritersRoomElements,
  StageElements,
  BackstageElements,
} from "./elements";
import { createAnimation, type AnimationRefs } from "./animations";

export type TheatricalType = "backstage" | "writersroom" | "stage";

type TheatricalBackgroundProps = {
  type: TheatricalType;
  children: React.ReactNode;
  className?: string;
};

const TheatricalBackground = ({
  type = "stage",
  children,
  className = "",
}: TheatricalBackgroundProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const curtainLeftRef = useRef<HTMLDivElement>(null);
  const curtainRightRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const audienceRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const writersElementsRef = useRef<HTMLDivElement>(null);
  const stageElementsRef = useRef<HTMLDivElement>(null);
  const backstageElementsRef = useRef<HTMLDivElement>(null);
  
  const fallbackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const refs: AnimationRefs = {
      curtainLeft: curtainLeftRef,
      curtainRight: curtainRightRef,
      spotlight: spotlightRef,
      audience: audienceRef,
      content: contentRef,
      writersElements: writersElementsRef,
      stageElements: stageElementsRef,
      backstageElements: backstageElementsRef,
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    let timeline: gsap.core.Timeline | null = null;
    if (!prefersReducedMotion) {
      timeline = createAnimation(type, refs);
    } else {
      if (contentRef.current) {
        contentRef.current.style.opacity = '1';
      }
    }

    return () => {
      if (timeline) {
        timeline.kill();
      }
    };
  }, [type]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <Curtains 
        leftRef={curtainLeftRef || fallbackRef} 
        rightRef={curtainRightRef || fallbackRef} 
      />
      <Spotlight 
        spotlightRef={spotlightRef || fallbackRef} 
        type={type} 
      />

      {type === "writersroom" && (
        <WritersRoomElements elementsRef={writersElementsRef || fallbackRef} />
      )}

      {type === "stage" && (
        <>
          <Audience audienceRef={audienceRef || fallbackRef} />
          <StageElements elementsRef={stageElementsRef || fallbackRef} />
        </>
      )}

      {type === "backstage" && (
        <BackstageElements elementsRef={backstageElementsRef || fallbackRef} />
      )}

      <div ref={contentRef || fallbackRef} className="relative z-10 p-4 sm:p-6 md:p-8">
        {children || <div>No content provided</div>}
      </div>
    </div>
  );
};

export default TheatricalBackground;
