import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import "@/app.css";

export const Route = createRootRoute({
  component: () => (
    <>
      {/* Page Content */}
      <main>
        <Outlet />
      </main>

      <TanStackRouterDevtools />
    </>
  ),
});
