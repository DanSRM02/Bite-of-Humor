"use client";
export default function Error() {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-red-600">Error</h1>
        <p className="mt-4 text-lg text-gray-700">
          An error occurred while fetching jokes.
        </p>
      </div>
    </div>
  );
}
