import { Route, useParams } from "@tanstack/react-router";
import { rootRoute } from "../Root";
import { Header } from "../components/Header";

export const oneProductRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: Product,
});

function Product() {
  const { id } = useParams();
  return (
    <>
      <Header />
      <span>{id}</span>
    </>
  );
}
