export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 sm:p-6 lg:p-8 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="flex flex-col sm:flex-row items-center justify-center bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 gap-4 sm:gap-6">
        <div className="animate-spin rounded-full h-12 w-12 sm:h-16 sm:w-16 border-t-2 border-b-2 border-gray-500"></div>
        <p className="text-sm sm:text-base lg:text-lg text-gray-700 font-medium">Loading...</p>
      </div>
    </div>
  );
}
