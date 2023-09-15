import { Outlet, RootRoute, Router } from "@tanstack/react-router";
import { indexRoute } from "./pages/Index";
import { loginRoute } from "./pages/Login";
import { registerRoute } from "./pages/Register";
import { oneProductRoute } from "./pages/Product";
import { oneCartRoute } from "./pages/Cart";

export const rootRoute = new RootRoute({
  component: Root,
});

export const router = new Router({
  routeTree: rootRoute.addChildren([
    indexRoute,
    loginRoute,
    registerRoute,
    oneProductRoute,
    oneCartRoute,
  ]),
});

export default function Root() {
  return (
    <>
      <Outlet />
    </>
  );
}
