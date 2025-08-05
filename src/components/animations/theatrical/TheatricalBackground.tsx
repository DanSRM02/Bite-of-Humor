"use client";
import { useEffect, useRef } from "react";
import { 
  Curtains, 
  Spotlight, 
  Audience, 
  WritersRoomElements, 
  StageElements, 
  BackstageElements 
} from "./elements";
import { createAnimation, type AnimationRefs } from "./animations";

export type TheatricalType = "backstage" | "writersroom" | "stage";

type TheatricalBackgroundProps = {
  type: TheatricalType;
  children: React.ReactNode;
  className?: string;
};

const TheatricalBackground = ({ 
  type, 
  children, 
  className = "" 
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

    const timeline = createAnimation(type, refs);

    return () => {
      timeline.kill();
    };
  }, [type]); // Removemos 'children' para evitar re-renderizados innecesarios

  return (
    <div 
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
    >
      <Curtains leftRef={curtainLeftRef} rightRef={curtainRightRef} />
      <Spotlight spotlightRef={spotlightRef} type={type} />
      
      {/* Elementos específicos según el tipo */}
      {type === "writersroom" && (
        <WritersRoomElements elementsRef={writersElementsRef} />
      )}
      
      {type === "stage" && (
        <>
          <Audience audienceRef={audienceRef} />
          <StageElements elementsRef={stageElementsRef} />
        </>
      )}
      
      {type === "backstage" && (
        <BackstageElements elementsRef={backstageElementsRef} />
      )}

      {/* Contenido */}
      <div ref={contentRef} className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default TheatricalBackground;
