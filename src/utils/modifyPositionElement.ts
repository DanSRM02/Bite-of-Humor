import gsap from "gsap";

interface MaxOffsets {
  maxOffsetX: number;
  maxOffsetY: number;
}

interface BoundaryConfig {
  viewportWidth: number;
  viewportHeight: number;
  elementWidth: number;
  elementHeight: number;
  maxOffsets: MaxOffsets;
}

const ANIMATION_CONFIG = {
  durations: {
    short: 0.1,
    medium: 0.2,
    long: 0.3,
    return: 0.4,
  },
  scales: {
    compressed: 0.8,
    reduced: 0.95,
    normal: 1,
    expanded: 1.1,
  },
  rotation: {
    min: -15,
    max: 15,
    dramatic: 20,
  },
  movement: {
    tremor: 5,
    escape: 30,
    boundaryFactor: 0.8,
  },
} as const;

export function modifyPositionElement(element: HTMLElement | null) {
  if (!element) {
    return {
      changePosition: () => {},
      defaultPosition: () => {},
      addPlayfulEffect: () => {},
      escapeEffect: () => {},
    };
  }

  function defaultPosition() {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: ANIMATION_CONFIG.durations.return,
      ease: "back.out(1.7)",
      scale: ANIMATION_CONFIG.scales.normal,
      rotation: 0,
    });
  }

  function changePosition({ maxOffsetX, maxOffsetY }: MaxOffsets) {
    const { x, y } = calculateBounds({ maxOffsetX, maxOffsetY });
    
    gsap.to(element, {
      x: `${x}vw`,
      y: `${y}vh`,
      duration: ANIMATION_CONFIG.durations.long,
      ease: "power2.out",
      scale: ANIMATION_CONFIG.scales.reduced,
      rotation: `random(${ANIMATION_CONFIG.rotation.min}, ${ANIMATION_CONFIG.rotation.max})`,
      onComplete: () => {
        gsap.to(element, {
          scale: ANIMATION_CONFIG.scales.normal,
          duration: ANIMATION_CONFIG.durations.medium,
          ease: "power2.out",
        });
      },
    });
  }

  function addPlayfulEffect() {
    gsap.to(element, {
      x: `+=${ANIMATION_CONFIG.movement.tremor}`,
      duration: ANIMATION_CONFIG.durations.short,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 3,
    });
  }

  function escapeEffect() {
    const randomDirection = Math.random() > 0.5 ? 1 : -1;
    
    gsap.timeline()
      .to(element, {
        scale: ANIMATION_CONFIG.scales.compressed,
        duration: ANIMATION_CONFIG.durations.short,
        ease: "power2.in",
      })
      .to(element, {
        x: `${randomDirection * ANIMATION_CONFIG.movement.escape}vw`,
        y: `${(Math.random() - 0.5) * 20}vh`,
        scale: ANIMATION_CONFIG.scales.expanded,
        rotation: randomDirection * ANIMATION_CONFIG.rotation.dramatic,
        duration: ANIMATION_CONFIG.durations.long,
        ease: "power2.out",
      })
      .to(element, {
        scale: ANIMATION_CONFIG.scales.normal,
        duration: ANIMATION_CONFIG.durations.medium,
        ease: "power2.out",
      });
  }

  function calculateBounds({ maxOffsetX, maxOffsetY }: MaxOffsets) {
    const config: BoundaryConfig = {
      viewportWidth: window.innerWidth,
      viewportHeight: window.innerHeight,
      elementWidth: element?.offsetWidth ?? 100,
      elementHeight: element?.offsetHeight ?? 100,
      maxOffsets: { maxOffsetX, maxOffsetY },
    };

    let x = (Math.random() - 0.5) * maxOffsetX;
    let y = (Math.random() - 0.5) * maxOffsetY;

    const pxX = (Math.abs(x) / 100) * config.viewportWidth;
    const pxY = (Math.abs(y) / 100) * config.viewportHeight;

    if (pxX + config.elementWidth > config.viewportWidth * ANIMATION_CONFIG.movement.boundaryFactor) {
      x = x > 0 ? maxOffsetX * 0.5 : -maxOffsetX * 0.5;
    }
    
    if (pxY + config.elementHeight > config.viewportHeight * ANIMATION_CONFIG.movement.boundaryFactor) {
      y = y > 0 ? maxOffsetY * 0.5 : -maxOffsetY * 0.5;
    }

    return { x, y };
  }

  return {
    changePosition,
    defaultPosition,
    addPlayfulEffect,
    escapeEffect,
  };
}
