import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import '@/app.css';

export const Route = createRootRoute({
  component: () => (
    <>
      <div>
        <Link to="/" className="[&.active]:font-bold">
          Home
        </Link>{' '}
        <Link to="/addition" className="[&.active]:font-bold">
          Addition
        </Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
})
