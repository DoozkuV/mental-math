import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-100 to-indigo-300">
      <div className="flex flex-col items-center justify-center bg-white/90 backdrop-blur-md shadow-2xl rounded-xl p-10 gap-8 w-4/5 md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-extrabold text-indigo-700 drop-shadow-lg text-center">
          Mental Math
        </h1>
        <p className="text-gray-600 text-center">
          Choose a challenge to get started:
        </p>

        <div className="flex flex-col gap-4 w-full">
          <Link
            to="/addition"
            className="w-full text-center py-4 text-xl font-bold text-white bg-indigo-600 rounded-lg shadow-md hover:bg-indigo-700 transition"
          >
            ➕ Addition
          </Link>

          <Link
            to="/subtraction"
            className="w-full text-center py-4 text-xl font-bold text-white bg-pink-500 rounded-lg shadow-md hover:bg-pink-600 transition"
          >
            ➖ Subtraction
          </Link>

          <Link
            to="/multiplication"
            className="w-full text-center py-4 text-xl font-bold text-white bg-green-600 rounded-lg shadow-md hover:bg-green-700 transition"
          >
            ✖️ Times Table
          </Link>

          <Link
            to="/power-of-two"
            className="w-full text-center py-4 text-xl font-bold text-white bg-red-500 rounded-lg shadow-md hover:bg-red-600 transition"
          >
            💪 Power of 2
          </Link>

          <Link
            to="/eleven"
            className="w-full text-center py-4 text-xl font-bold text-white bg-yellow-500 rounded-lg shadow-md hover:bg-yellow-600 transition"
          >
            ✨ Double Digits Times 11
          </Link>
        </div>
      </div>
    </div>
  );
}
