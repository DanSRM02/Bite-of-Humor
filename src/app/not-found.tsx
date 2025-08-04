import Link from "next/link";

export default function GlobalNotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-50">
      <div className="flex flex-col items-center justify-center border border-gray-300 max-w-2xl w-full p-12 text-center rounded-lg bg-white shadow-sm">
        <div className="text-6xl mb-6" role="img" aria-label="Error icon">
          🌍
        </div>

        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h1>

        <p className="text-lg text-gray-600 mb-8 max-w-md">
          The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col text-white  sm:flex-row gap-4">
          <Link
            href="/"
            className="px-6 py-3 bg-gray-600 rounded-md hover:bg-gray-700 transition-colors font-medium"
          >
            Go to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
