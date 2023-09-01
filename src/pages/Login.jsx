import React, { useState } from "react";
import { Link, Route } from "@tanstack/react-router";
import { rootRoute } from "../Root";

export const loginRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/login",
  component: Login,
});

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen container bg-login_img bg-center bg-cover flex flex-col">
      <header className="py-8 flex justify-center">
        <Link to="/" className="text-lg inline-flex items-center gap-5">
          <img
            src="/img/Logo.png"
            alt="Logo de Betabyte"
            className="max-h-10"
          />
          <span className="font-semibold text-4xl uppercase">BETABYTE</span>
        </Link>
      </header>
      <main className="grow grid place-content-center container">
        <main className="flex items-center justify-center">
          <div className="relative flex flex-col m-6 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-3 text-4xl font-bold">
                Bienvenido de nuevo
              </span>
              <span className="font-light text-gray-400 mb-8">
                ¡Bienvenido de nuevo! Por favor, ingresa tus detalles
              </span>
              <div className="py-4">
                <span className="mb-2 text-md">Correo Electronico</span>
                <input
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-text-gray-500"
                  name="email"
                  id="email"
                />
              </div>
              <div className="py-4">
                <span className="mb-2 text-md">Contraseña</span>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="pass"
                    id="pass"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-text-gray-500"
                  />
                  <span
                    className="absolute top-1/2 right-4 transform -translate-y-1/2 cursor-pointer"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={`fa ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                    />
                  </span>
                </div>
              </div>
              <div className="flex justify-between w-full py-4">
                <div className="mr-24">
                  <input type="checkbox" name="ch" id="ch" className="mr-2" />
                  <span className="text-md">Recordar durante 30 días</span>
                </div>
                <span className="font-bold text-md">
                  ¿Olvidaste tu contraseña?
                </span>
              </div>
              <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                Iniciar Sesión
              </button>
              <button className="w-full border border-gray-300 text-md p-2 rounded-lg mb-6 hover:bg-black hover:text-white">
                <img
                  src="\public\google.svg"
                  alt="img"
                  className="w-6 h-6 inline mr-2"
                />
                Inicia Sesión por Google
              </button>
              <div className="text-center text-gray-400">
                ¿No tienes una cuenta?
                <span className="font-bold text-black"> Regístrate gratis</span>
              </div>
            </div>
            <div className="relative">
              <img
                src="/public/img/image.jpg"
                alt="img"
                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
              />
              <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                <span className="text-white text-xl">Hola</span>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
