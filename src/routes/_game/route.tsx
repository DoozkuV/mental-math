import { createFileRoute, Outlet, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/_game")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-indigo-200 via-blue-100 to-indigo-300 p-6">
      <div className="flex flex-col items-center gap-6 w-full max-w-2xl">
        <Outlet />
        <Link
          to="/"
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow-md hover:bg-indigo-700 transition text-lg font-semibold"
        >
          ⬅ Return Home
        </Link>
      </div>
    </div>
  );
}
