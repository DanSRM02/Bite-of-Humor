import gsap from "gsap";
import { TheatricalType } from "./TheatricalBackground";

export type AnimationRefs = {
  curtainLeft: React.RefObject<HTMLDivElement>;
  curtainRight: React.RefObject<HTMLDivElement>;
  spotlight: React.RefObject<HTMLDivElement>;
  audience: React.RefObject<HTMLDivElement>;
  content: React.RefObject<HTMLDivElement>;
  writersElements: React.RefObject<HTMLDivElement>;
  stageElements: React.RefObject<HTMLDivElement>;
  backstageElements: React.RefObject<HTMLDivElement>;
};

// Función para configurar estados iniciales comunes
export const setInitialStates = (refs: AnimationRefs, timeline: gsap.core.Timeline) => {
  timeline
    .set([refs.curtainLeft.current, refs.curtainRight.current], { 
      x: 0, 
      opacity: 1 
    })
    .set(refs.spotlight.current, { 
      opacity: 0 
    })
    .set(refs.audience.current, { 
      opacity: 0 
    });
};

// Función para animar la apertura de cortinas
export const animateCurtains = (refs: AnimationRefs, timeline: gsap.core.Timeline, duration: number = 1.5) => {
  timeline
    .to(refs.curtainLeft.current, { 
      x: "-100%", 
      duration, 
      ease: "power2.inOut" 
    })
    .to(refs.curtainRight.current, { 
      x: "100%", 
      duration, 
      ease: "power2.inOut" 
    }, `-=${duration}`);
};

// Función para animar la entrada del contenido
export const animateContentEntrance = (refs: AnimationRefs, timeline: gsap.core.Timeline, config: {
  delay?: string;
  y?: number;
  scale?: number;
  duration?: number;
  ease?: string;
} = {}) => {
  const { delay = "-=0.8", y = 20, scale, duration = 1, ease = "power2.out" } = config;
  
  const fromProps: Record<string, unknown> = { opacity: 0, y };
  const toProps: Record<string, unknown> = { opacity: 1, y: 0, duration, ease };
  
  if (scale) {
    fromProps.scale = scale;
    toProps.scale = 1;
  }
  
  timeline.fromTo(refs.content.current, fromProps, toProps, delay);
};

// Animaciones específicas para Backstage
export const createBackstageAnimation = (refs: AnimationRefs) => {
  const timeline = gsap.timeline();
  
  setInitialStates(refs, timeline);
  
  timeline
    .set(refs.backstageElements.current?.children || [], {
      opacity: 0,
      y: 10
    });
  
  animateCurtains(refs, timeline, 2);
  
  timeline
    .to(refs.backstageElements.current?.children || [], {
      opacity: 1,
      y: 0,
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out"
    }, "-=1");
  
  animateContentEntrance(refs, timeline);
  
  // Efectos ambientales continuos
  timeline
    .to(refs.backstageElements.current?.children || [], {
      opacity: 0.3,
      duration: 1,
      ease: "power2.inOut"
    }, "+=3")
    .to(refs.backstageElements.current?.children || [], {
      opacity: 0.6,
      duration: 1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  
  return timeline;
};

// Animaciones específicas para Writers Room
export const createWritersRoomAnimation = (refs: AnimationRefs) => {
  const timeline = gsap.timeline();
  
  setInitialStates(refs, timeline);
  
  timeline
    .set(refs.spotlight.current, { 
      scale: 0.5 
    })
    .set(refs.writersElements.current?.children || [], {
      opacity: 0,
      scale: 0.5,
      rotation: 0
    });
  
  animateCurtains(refs, timeline, 1.2);
  
  timeline
    .to(refs.spotlight.current, { 
      opacity: 1, 
      scale: 1.5, 
      duration: 1.5,
      ease: "power2.out" 
    }, "-=0.6")
    .to(refs.writersElements.current?.children || [], {
      opacity: 1,
      scale: 1,
      rotation: "random(-15, 15)",
      duration: 0.8,
      stagger: 0.1,
      ease: "back.out(1.7)"
    }, "-=1.2");
  
  animateContentEntrance(refs, timeline, { y: 30, delay: "-=1" });
  
  // Efectos creativos continuos
  timeline
    .to({}, { duration: 4 })
    .to(refs.writersElements.current?.children || [], {
      y: "random(-20, 20)",
      x: "random(-10, 10)",
      rotation: "random(-25, 25)",
      duration: 2,
      stagger: 0.1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    })
    .to(refs.writersElements.current?.children[4] || {}, {
      scale: 1.2,
      duration: 0.5,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    }, "-=2");
  
  return timeline;
};

// Animaciones específicas para Stage
export const createStageAnimation = (refs: AnimationRefs) => {
  const timeline = gsap.timeline();
  
  setInitialStates(refs, timeline);
  
  timeline
    .set(refs.spotlight.current, { 
      scale: 0.3 
    })
    .set(refs.audience.current, { 
      y: 20 
    })
    .set(refs.stageElements.current?.children || [], {
      opacity: 0,
      y: 20
    })
    .to(refs.audience.current, { 
      opacity: 1, 
      y: 0, 
      duration: 0.8,
      ease: "power2.out" 
    });
  
  animateCurtains(refs, timeline, 1.5);
  
  timeline
    .to(refs.spotlight.current, { 
      opacity: 1, 
      scale: 2, 
      duration: 1.2,
      ease: "power2.out" 
    }, "-=1")
    .to(refs.stageElements.current?.children || [], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.15,
      ease: "bounce.out"
    }, "-=0.8");
  
  animateContentEntrance(refs, timeline, { scale: 0.9, ease: "back.out(1.7)" });
  
  // Efectos de espectáculo continuos
  timeline
    .to({}, { duration: 5 })
    .to(refs.stageElements.current?.children || [], {
      scale: 1.1,
      duration: 0.3,
      stagger: 0.1,
      ease: "power2.inOut",
      repeat: 3,
      yoyo: true
    })
    .to(refs.spotlight.current, {
      scale: 2.5,
      opacity: 0.8,
      duration: 1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    }, "-=2")
    .to(refs.stageElements.current?.children || [], {
      opacity: 0.4,
      duration: 2,
      stagger: 0.2,
      ease: "power2.inOut"
    }, "+=3")
    .to(refs.stageElements.current?.children || [], {
      opacity: 0.8,
      scale: 1.05,
      duration: 1.5,
      stagger: 0.1,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true
    });
  
  return timeline;
};

// Función principal para crear animaciones según el tipo
export const createAnimation = (type: TheatricalType, refs: AnimationRefs) => {
  switch (type) {
    case "backstage":
      return createBackstageAnimation(refs);
    case "writersroom":
      return createWritersRoomAnimation(refs);
    case "stage":
      return createStageAnimation(refs);
    default:
      return gsap.timeline();
  }
};
