import React from "react";

type BackstageElementsProps = {
  elementsRef: React.RefObject<HTMLDivElement | null>;
};

const BackstageElements = ({ elementsRef }: BackstageElementsProps) => {
  return (
    <div ref={elementsRef}>
      <div className="absolute top-8 left-4 md:top-16 md:left-8 w-6 h-8 md:w-8 md:h-12 bg-gray-700 opacity-60 z-15 shadow-lg">
        <div className="w-4 md:w-6 h-3 md:h-4 bg-red-600 mt-1 md:mt-2 mx-auto animate-pulse"></div>
        <div className="text-xs text-center text-red-400 mt-0.5 md:mt-1">REC</div>
      </div>
      <div className="absolute top-10 right-6 md:top-20 md:right-10 w-8 h-6 md:w-10 md:h-8 bg-gray-600 opacity-50 z-15 shadow-md">
        <div className="w-2 md:w-3 h-2 md:h-3 bg-green-500 mt-0.5 md:mt-1 ml-0.5 md:ml-1 animate-pulse"></div>
        <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-500 mt-0.5 md:mt-1 ml-3 md:ml-5 animate-pulse"></div>
      </div>
      <div className="absolute bottom-12 left-6 md:bottom-24 md:left-12 w-4 h-6 md:w-6 md:h-8 bg-gray-800 opacity-45 z-15 shadow-sm">
        <div className="w-3 md:w-4 h-1.5 md:h-2 bg-orange-500 mt-0.5 md:mt-1 mx-auto animate-pulse"></div>
        <div className="text-xs text-center text-orange-400 mt-0.5 md:mt-1">PWR</div>
      </div>
      <div className="absolute bottom-14 right-8 md:bottom-28 md:right-16 w-6 h-4 md:w-8 md:h-6 bg-gray-700 opacity-40 z-15 shadow-md">
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-blue-400 mt-0.5 md:mt-1 ml-0.5 md:ml-1 animate-pulse"></div>
        <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-green-400 mt-0.5 md:mt-1 ml-2.5 md:ml-4 animate-pulse"></div>
      </div>
      
      <div className="absolute top-1/4 left-1 md:left-2 w-1 md:w-2 h-16 md:h-24 bg-black opacity-40 transform rotate-12 z-15 shadow-sm"></div>
      <div className="absolute top-2/3 right-1 md:right-2 w-1 md:w-2 h-12 md:h-16 bg-black opacity-35 transform -rotate-12 z-15 shadow-sm"></div>
      <div className="hidden md:block absolute top-1/2 left-4 w-1 h-20 bg-gray-800 opacity-30 transform rotate-6 z-15 shadow-sm"></div>
      <div className="hidden md:block absolute bottom-1/3 right-6 w-1 h-18 bg-gray-700 opacity-25 transform -rotate-8 z-15 shadow-sm"></div>
      
      <div className="absolute top-1/3 left-8 md:left-16 w-8 h-6 md:w-12 md:h-8 bg-gray-800 z-15 opacity-50 shadow-lg">
        <div className="w-6 h-4 md:w-8 md:h-6 bg-green-900 m-0.5 md:m-1 animate-pulse"></div>
        <div className="w-0.5 md:w-1 h-0.5 md:h-1 bg-red-500 absolute bottom-0.5 md:bottom-1 right-0.5 md:right-1 animate-pulse"></div>
      </div>
      <div className="hidden md:block absolute bottom-1/3 right-24 w-10 h-6 bg-gray-700 z-15 opacity-45 shadow-md">
        <div className="w-6 h-4 bg-blue-900 m-1 animate-pulse"></div>
        <div className="w-1 h-1 bg-yellow-500 absolute top-1 right-1 animate-pulse"></div>
      </div>
    </div>
  );
};

export default BackstageElements;
