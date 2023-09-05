import { Outlet, RootRoute, Router } from "@tanstack/react-router";
import { indexRoute } from "./pages/Index";
import { loginRoute } from "./pages/Login";
import { registerRoute } from "./pages/Register";

export const rootRoute = new RootRoute({
  component: Root,
});

export const router = new Router({
  routeTree: rootRoute.addChildren([indexRoute, loginRoute, registerRoute]),
});

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
