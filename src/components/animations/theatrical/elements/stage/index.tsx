import React from "react";

type StageElementsProps = {
  elementsRef: React.RefObject<HTMLDivElement>;
};

const StageElements = ({ elementsRef }: StageElementsProps) => {
  return (
    <div ref={elementsRef}>
      <div className="absolute bottom-16 right-8 md:bottom-32 md:right-16 z-15 opacity-60">
        <div className="w-2 md:w-3 h-6 md:h-8 bg-gray-800 mx-auto shadow-lg"></div>
        <div className="w-4 md:w-6 h-3 md:h-4 bg-gray-600 rounded-t-full mx-auto shadow-md"></div>
        <div className="w-0.5 md:w-1 h-8 md:h-12 bg-gray-700 mx-auto"></div>
        <div className="w-6 md:w-8 h-1.5 md:h-2 bg-gray-800 rounded mx-auto shadow-lg"></div>
      </div>
      
      <div className="absolute top-3 left-4 md:top-5 md:left-8 w-4 h-8 md:w-6 md:h-12 bg-yellow-400 opacity-80 z-15 shadow-lg">
        <div className="w-full h-2 md:h-3 bg-yellow-300 rounded-b"></div>
      </div>
      <div className="absolute top-3 right-4 md:top-5 md:right-8 w-4 h-8 md:w-6 md:h-12 bg-yellow-400 opacity-80 z-15 shadow-lg">
        <div className="w-full h-2 md:h-3 bg-yellow-300 rounded-b"></div>
      </div>
      <div className="hidden md:block absolute top-8 left-1/3 w-4 h-10 bg-yellow-400 opacity-70 z-15 shadow-md">
        <div className="w-full h-2 bg-yellow-300 rounded-b"></div>
      </div>
      <div className="hidden md:block absolute top-8 right-1/3 w-4 h-10 bg-yellow-400 opacity-70 z-15 shadow-md">
        <div className="w-full h-2 bg-yellow-300 rounded-b"></div>
      </div>
      
      <div className="absolute bottom-10 left-4 md:bottom-16 md:left-8 text-xl md:text-3xl opacity-70 z-15 animate-bounce">👏</div>
      <div className="absolute bottom-14 left-12 md:bottom-24 md:left-20 text-lg md:text-2xl opacity-60 z-15 animate-bounce">👏</div>
      <div className="absolute top-1/2 right-2 md:top-1/2 md:right-6 text-lg md:text-3xl opacity-60 z-15 animate-bounce">👏</div>
      <div className="hidden md:block absolute top-1/3 left-4 text-2xl opacity-50 z-15 animate-bounce">👏</div>
      <div className="hidden md:block absolute bottom-12 right-32 text-2xl opacity-50 z-15 animate-bounce">👏</div>
      
      <div className="absolute top-8 left-8 md:top-12 md:left-16 text-sm md:text-xl opacity-50 z-15 animate-pulse">🎉</div>
      <div className="absolute top-10 right-10 md:top-20 md:right-20 text-sm md:text-lg opacity-40 z-15 animate-pulse">🎉</div>
      <div className="hidden md:block absolute bottom-20 left-32 text-lg opacity-45 z-15 animate-pulse">✨</div>
    </div>
  );
};

export default StageElements;
