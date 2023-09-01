import { Outlet, RootRoute, Router } from "@tanstack/react-router";
import { indexRoute } from "./pages/Index";
import { loginRoute } from "./pages/Login";

export const rootRoute = new RootRoute({
  component: Root,
});

export const router = new Router({
  routeTree: rootRoute.addChildren([indexRoute, loginRoute]),
});

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
