import { Outlet, RootRoute, Router } from "@tanstack/react-router";
import { appRoute } from "./App";
import { indexRoute } from "./pages/Index";

export const rootRoute = new RootRoute({
  component: Root,
});

export const router = new Router({
  routeTree: rootRoute.addChildren([appRoute, indexRoute]),
});

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
