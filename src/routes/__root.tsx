import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "@/app.css";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Header / Nav */}
      <header className="sticky top-0 z-50 bg-gradient-to-r from-indigo-600 to-blue-500 shadow-md">
        <nav className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4 text-white font-semibold">
          <h1 className="text-2xl font-extrabold tracking-wide drop-shadow-md">
            Math Games
          </h1>
          <div className="flex gap-6 text-lg">
            <Link
              to="/"
              className="[&.active]:underline [&.active]:font-bold hover:opacity-90 transition"
            >
              Home
            </Link>
            <Link
              to="/addition"
              className="[&.active]:underline [&.active]:font-bold hover:opacity-90 transition"
            >
              Addition
            </Link>
            <Link
              to="/eleven"
              className="[&.active]:underline [&.active]:font-bold hover:opacity-90 transition"
            >
              Eleven
            </Link>
          </div>
        </nav>
      </header>

      {/* Page Content */}
      <main className="p-6">
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </>
  ),
});
