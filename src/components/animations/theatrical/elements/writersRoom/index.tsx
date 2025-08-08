import React from "react";

type WritersRoomElementsProps = {
  elementsRef: React.RefObject<HTMLDivElement | null>;
};

const WritersRoomElements = ({ elementsRef }: WritersRoomElementsProps) => {
  return (
    <div ref={elementsRef}>
      <div className="absolute top-6 left-4 md:top-10 md:left-10 w-6 h-7 md:w-8 md:h-10 bg-white opacity-70 transform rotate-12 shadow-md z-15">
        <div className="w-full h-0.5 md:h-1 bg-gray-300 mt-1 md:mt-2"></div>
        <div className="w-3/4 h-0.5 md:h-1 bg-gray-300 mt-0.5 md:mt-1"></div>
        <div className="w-full h-0.5 md:h-1 bg-gray-300 mt-0.5 md:mt-1"></div>
      </div>
      <div className="absolute top-8 right-6 md:top-16 md:right-12 w-4 h-6 md:w-6 md:h-8 bg-yellow-100 opacity-60 transform -rotate-6 shadow-md z-15">
        <div className="w-full h-0.5 md:h-1 bg-gray-400 mt-0.5 md:mt-1"></div>
        <div className="w-2/3 h-0.5 md:h-1 bg-gray-400 mt-0.5 md:mt-1"></div>
      </div>
      <div className="hidden md:block absolute top-8 right-32 w-7 h-9 bg-white opacity-50 transform rotate-8 shadow-md z-15">
        <div className="w-full h-1 bg-gray-300 mt-1"></div>
        <div className="w-2/3 h-1 bg-gray-300 mt-1"></div>
        <div className="w-full h-1 bg-gray-300 mt-1"></div>
      </div>
      
      <div className="absolute top-1/4 left-2 md:top-1/3 md:left-4 w-8 h-1 md:w-16 md:h-2 bg-yellow-600 transform rotate-90 shadow-sm z-15 opacity-50">
        <div className="w-2 md:w-3 h-1 md:h-2 bg-pink-400 absolute -left-1"></div>
      </div>
      <div className="absolute top-2/3 right-2 md:right-4 w-6 h-1 md:w-12 md:h-2 bg-blue-600 transform rotate-90 shadow-sm z-15 opacity-40">
        <div className="w-1 md:w-2 h-1 md:h-2 bg-gray-800 absolute -left-1"></div>
      </div>
      <div className="hidden md:block absolute bottom-1/3 left-6 w-14 h-2 bg-red-600 transform rotate-45 shadow-sm z-15 opacity-45">
        <div className="w-2 h-2 bg-gray-800 absolute -left-1"></div>
      </div>
      
      <div className="absolute bottom-12 left-6 md:bottom-20 md:left-12 w-6 h-7 md:w-8 md:h-10 opacity-50 z-15">
        <div className="w-4 md:w-6 h-4 md:h-6 bg-yellow-300 rounded-full mx-auto animate-pulse shadow-lg"></div>
        <div className="w-2 md:w-3 h-2 md:h-3 bg-gray-400 mx-auto"></div>
        <div className="w-3 md:w-4 h-0.5 md:h-1 bg-gray-500 mx-auto"></div>
        <div className="text-xs text-center">💡</div>
      </div>
      <div className="hidden md:block absolute bottom-16 right-16 w-6 h-8 opacity-40 z-15">
        <div className="w-4 h-4 bg-yellow-200 rounded-full mx-auto animate-pulse shadow-md"></div>
        <div className="w-2 h-2 bg-gray-400 mx-auto"></div>
        <div className="w-3 h-1 bg-gray-500 mx-auto"></div>
      </div>
    </div>
  );
};

export default WritersRoomElements;
