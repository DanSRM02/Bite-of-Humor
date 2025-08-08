import gsap from "gsap";
import { TheatricalType } from "./TheatricalBackground";
import { RefObject } from "react";

export type AnimationRefs = {
  curtainLeft: RefObject<HTMLDivElement | null>;
  curtainRight: RefObject<HTMLDivElement | null>;
  spotlight: RefObject<HTMLDivElement | null>;
  audience: RefObject<HTMLDivElement | null>;
  content: RefObject<HTMLDivElement | null>;
  writersElements: RefObject<HTMLDivElement | null>;
  stageElements: RefObject<HTMLDivElement | null>;
  backstageElements: RefObject<HTMLDivElement | null>;
};

export type ResponsiveConfig = {
  curtainDuration: number;
  spotlightScale: number;
  animationIntensity: number;
};

export const setInitialStates = (
  refs: AnimationRefs,
  timeline: gsap.core.Timeline
) => {
  const curtainLeft = refs.curtainLeft.current || {};
  const curtainRight = refs.curtainRight.current || {};
  const spotlight = refs.spotlight.current || {};
  const audience = refs.audience.current || {};

  timeline.set([curtainLeft, curtainRight], {
    x: 0,
    opacity: 1,
  });
  timeline.set(spotlight, {
    opacity: 0,
  });
  timeline.set(audience, {
    opacity: 0,
  });
};

export const animateCurtains = (
  refs: AnimationRefs,
  timeline: gsap.core.Timeline,
  duration: number = 1.5
) => {
  if (refs.curtainLeft.current) {
    timeline.to(refs.curtainLeft.current, {
      x: "-100%",
      duration,
      ease: "power2.inOut",
    });
  }
  if (refs.curtainRight.current) {
    timeline.to(
      refs.curtainRight.current,
      {
        x: "100%",
        duration,
        ease: "power2.inOut",
      },
      `-=${duration}`
    );
  }
};

export const animateContentEntrance = (
  refs: AnimationRefs,
  timeline: gsap.core.Timeline,
  config: {
    delay?: string;
    y?: number;
    scale?: number;
    duration?: number;
    ease?: string;
  } = {}
) => {
  const {
    delay = "-=0.8",
    y = 20,
    scale,
    duration = 1,
    ease = "power2.out",
  } = config;

  const fromProps: Record<string, unknown> = { opacity: 0, y };
  const toProps: Record<string, unknown> = { opacity: 1, y: 0, duration, ease };

  if (scale) {
    fromProps.scale = scale;
    toProps.scale = 1;
  }

  const content = refs.content.current || {};
  timeline.fromTo(content, fromProps, toProps, delay);
};

export const createBackstageAnimation = (
  refs: AnimationRefs,
  config?: ResponsiveConfig
) => {
  const responsiveConfig = config || {
    curtainDuration: 2,
    spotlightScale: 2,
    animationIntensity: 1,
  };

  const timeline = gsap.timeline();

  setInitialStates(refs, timeline);

  const backstageElements = refs.backstageElements.current;
  const backstageChildren = backstageElements?.children || [];
  timeline.set(backstageChildren, {
    opacity: 0,
    y: 10 * responsiveConfig.animationIntensity,
  });

  animateCurtains(refs, timeline, responsiveConfig.curtainDuration);

  if (refs.backstageElements.current) {
    timeline.to(
      refs.backstageElements.current.children || [],
      {
        opacity: 1,
        y: 0,
        duration: 0.5 * responsiveConfig.animationIntensity,
        stagger: 0.2 * responsiveConfig.animationIntensity,
        ease: "power2.out",
      },
      "-=1"
    );
  }

  animateContentEntrance(refs, timeline);

  if (refs.backstageElements.current) {
    timeline
      .to(
        refs.backstageElements.current.children || [],
        {
          opacity: 0.3,
          duration: 1 * responsiveConfig.animationIntensity,
          ease: "power2.inOut",
        },
        "+=3"
      )
      .to(refs.backstageElements.current.children || [], {
        opacity: 0.6,
        duration: 1 * responsiveConfig.animationIntensity,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
  }

  return timeline;
};

export const createWritersRoomAnimation = (
  refs: AnimationRefs,
  config?: ResponsiveConfig
) => {
  const responsiveConfig = config || {
    curtainDuration: 1.2,
    spotlightScale: 1.5,
    animationIntensity: 1,
  };

  const timeline = gsap.timeline();

  setInitialStates(refs, timeline);

  if (refs.spotlight.current) {
    timeline.set(refs.spotlight.current, {
      scale: 0.5,
    });
  }
  if (refs.writersElements.current) {
    timeline.set(refs.writersElements.current.children || [], {
      opacity: 0,
      scale: 0.5,
      rotation: 0,
    });
  }

  animateCurtains(refs, timeline, responsiveConfig.curtainDuration);

  if (refs.spotlight.current) {
    timeline.to(
      refs.spotlight.current,
      {
        opacity: 1,
        scale: responsiveConfig.spotlightScale,
        duration: 1.5 * responsiveConfig.animationIntensity,
        ease: "power2.out",
      },
      "-=0.6"
    );
  }
  if (refs.writersElements.current) {
    timeline.to(
      refs.writersElements.current.children || [],
      {
        opacity: 1,
        scale: 1,
        rotation: "random(-15, 15)",
        duration: 0.8 * responsiveConfig.animationIntensity,
        stagger: 0.1 * responsiveConfig.animationIntensity,
        ease: "back.out(1.7)",
      },
      "-=1.2"
    );
  }

  animateContentEntrance(refs, timeline, { y: 30, delay: "-=1" });

  if (refs.writersElements.current) {
    timeline
      .to({}, { duration: 4 * responsiveConfig.animationIntensity })
      .to(refs.writersElements.current.children || [], {
        y: `random(${-20 * responsiveConfig.animationIntensity}, ${
          20 * responsiveConfig.animationIntensity
        })`,
        x: `random(${-10 * responsiveConfig.animationIntensity}, ${
          10 * responsiveConfig.animationIntensity
        })`,
        rotation: `random(${-25 * responsiveConfig.animationIntensity}, ${
          25 * responsiveConfig.animationIntensity
        })`,
        duration: 2 * responsiveConfig.animationIntensity,
        stagger: 0.1 * responsiveConfig.animationIntensity,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      })
      .to(
        refs.writersElements.current.children[4] || {},
        {
          scale: 1.2,
          duration: 0.5 * responsiveConfig.animationIntensity,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        },
        "-=2"
      );
  }

  return timeline;
};

export const createStageAnimation = (
  refs: AnimationRefs,
  config?: ResponsiveConfig
) => {
  const responsiveConfig = config || {
    curtainDuration: 1.5,
    spotlightScale: 2,
    animationIntensity: 1,
  };

  const timeline = gsap.timeline();

  setInitialStates(refs, timeline);

  if (refs.spotlight.current) {
    timeline.set(refs.spotlight.current, {
      scale: 0.3,
    });
  }
  if (refs.audience.current) {
    timeline.set(refs.audience.current, {
      y: 20 * responsiveConfig.animationIntensity,
    });
    timeline.to(refs.audience.current, {
      opacity: 1,
      y: 0,
      duration: 0.8 * responsiveConfig.animationIntensity,
      ease: "power2.out",
    });
  }
  if (refs.stageElements.current) {
    timeline.set(refs.stageElements.current.children || [], {
      opacity: 0,
      y: 20 * responsiveConfig.animationIntensity,
    });
  }

  animateCurtains(refs, timeline, responsiveConfig.curtainDuration);

  if (refs.spotlight.current) {
    timeline.to(
      refs.spotlight.current,
      {
        opacity: 1,
        scale: responsiveConfig.spotlightScale,
        duration: 1.2 * responsiveConfig.animationIntensity,
        ease: "power2.out",
      },
      "-=1"
    );
  }
  if (refs.stageElements.current) {
    timeline.to(
      refs.stageElements.current.children || [],
      {
        opacity: 1,
        y: 0,
        duration: 0.6 * responsiveConfig.animationIntensity,
        stagger: 0.15 * responsiveConfig.animationIntensity,
        ease: "bounce.out",
      },
      "-=0.8"
    );
  }

  animateContentEntrance(refs, timeline, { scale: 0.9, ease: "back.out(1.7)" });

  if (refs.stageElements.current) {
    timeline
      .to({}, { duration: 5 * responsiveConfig.animationIntensity })
      .to(refs.stageElements.current.children || [], {
        scale: 1.1,
        duration: 0.3 * responsiveConfig.animationIntensity,
        stagger: 0.1 * responsiveConfig.animationIntensity,
        ease: "power2.inOut",
        repeat: 3,
        yoyo: true,
      });
  }
  if (refs.spotlight.current) {
    timeline.to(
      refs.spotlight.current,
      {
        scale: responsiveConfig.spotlightScale * 1.25,
        opacity: 0.8,
        duration: 1 * responsiveConfig.animationIntensity,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      },
      "-=2"
    );
  }
  if (refs.stageElements.current) {
    timeline
      .to(
        refs.stageElements.current.children || [],
        {
          opacity: 0.4,
          duration: 2 * responsiveConfig.animationIntensity,
          stagger: 0.2 * responsiveConfig.animationIntensity,
          ease: "power2.inOut",
        },
        "+=3"
      )
      .to(refs.stageElements.current.children || [], {
        opacity: 0.8,
        scale: 1.05,
        duration: 1.5 * responsiveConfig.animationIntensity,
        stagger: 0.1 * responsiveConfig.animationIntensity,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });
  }

  return timeline;
};

export const createAnimation = (type: TheatricalType, refs: AnimationRefs) => {
  const isMobile = window.innerWidth < 640;
  const isTablet = window.innerWidth < 1024;

  const responsiveConfig = {
    curtainDuration: isMobile ? 1 : isTablet ? 1.2 : 1.5,
    spotlightScale: isMobile ? 1.2 : isTablet ? 1.5 : 2,
    animationIntensity: isMobile ? 0.5 : isTablet ? 0.75 : 1,
  };

  switch (type) {
    case "backstage":
      return createBackstageAnimation(refs, responsiveConfig);
    case "writersroom":
      return createWritersRoomAnimation(refs, responsiveConfig);
    case "stage":
      return createStageAnimation(refs, responsiveConfig);
    default:
      return gsap.timeline();
  }
};
