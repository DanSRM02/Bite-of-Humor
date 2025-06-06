import { useRef } from "react";

const TheaterCurtains = () => {
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  return (
    <>
      <div ref={leftCurtainRef} className="curtain left-curtain"></div>
      <div ref={rightCurtainRef} className="curtain right-curtain"></div>
    </>
  );
};

export default TheaterCurtains;
