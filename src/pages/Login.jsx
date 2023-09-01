import { Route, Link } from "@tanstack/react-router";
import { rootRoute } from "../Root";

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

function Login() {
  return (
    <div className="min-h-screen container bg-login_img bg-center bg-cover flex flex-col">
      <header className="py-8 flex justify-center">
        <Link to="/" className="text-lg inline-flex items-center gap-5">
          <img
            src="/img/Logo.png"
            alt="Logo de Betabyte"
            className="max-h-10 "
          />
          <span className="font-semibold text-4xl uppercase">BETABYTE</span>
        </Link>
      </header>
      <main className="grow grid place-content-center container"></main>
    </div>
  );
}
