"use client";
export default function Error() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="text-center max-w-md mx-auto bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10">
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-red-600 mb-4">Error</h1>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
          An error occurred while fetching jokes.
        </p>
      </div>
    </div>
  );
}
