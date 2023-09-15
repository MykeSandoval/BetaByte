import { Route } from "@tanstack/react-router";
import { rootRoute } from "../Root";
import { Header } from "../components/Header";

export const oneCartRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});

function Cart() {
  return (
    <>
      <Header />
      <span></span>
    </>
  );
}
