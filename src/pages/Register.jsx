import { useState, useRef } from "react";
import { Link, Route, useNavigate } from "@tanstack/react-router";
import { rootRoute } from "../Root";
import ReCAPTCHA from "react-google-recaptcha";

export const registerRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/register",
  component: Register,
});

function Register() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const [userVerified, setUserVerified] = useState(false);
  const [captchaError, setCaptchaError] = useState(false);

  const captcha = useRef(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userVerified) {
      console.log(formData);

      navigate("/login");
    } else {
      console.log("Por favor, resuelve el captcha antes de registrarte.");
      setCaptchaError(true);
    }
  };

  const onChange = (value) => {
    if (value) {
      console.log("El usuario no es un robot");
      setUserVerified(true);
    }
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
          <div className="relative flex flex-col m-12 space-y-8 bg-white shadow-2xl rounded-2xl md:flex-row md:space-y-0">
            <div className="flex flex-col justify-center p-8 md:p-14">
              <span className="mb-3 text-4xl font-bold">Regístrate</span>
              <span className="font-light text-gray-400 mb-8">
                Regístrate hoy y disfruta de ventajas exclusivas
              </span>
              <form onSubmit={handleSubmit}>
                <div className="py-4">
                  <span className="mb-2 text-md">Usuario</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-text-gray-500"
                    name="username"
                    id="username"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-0">
                  <span className="mb-2 text-md">Correo Electrónico</span>
                  <input
                    type="text"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-text-gray-500"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-4">
                  <span className="mb-2 text-md">Contraseña</span>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    className="w-full p-2 border border-gray-300 rounded-md placeholder-light placeholder-text-gray-500"
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <div className="py-1">
                  <span className="mb-2 text-md">Confirmar Contraseña</span>
                  <input
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    className="w-full p-2 mb-3 border border-gray-300 rounded-md placeholder-light placeholder-text-gray-500"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <div className="Recaptcha flex justify-center mb-2">
                    <ReCAPTCHA
                      ref={captcha}
                      sitekey="6LfD7f8nAAAAAD9ENhnHZ655MNReeHMYkVG9M8xe"
                      onChange={onChange}
                    />
                  </div>
                </div>
                {captchaError && (
                  <div className="error-captcha text-center m-2 text-red-600">
                    Por favor acepta el captcha
                  </div>
                )}

                <button className="w-full bg-black text-white p-2 rounded-lg mb-6 hover:bg-white hover:text-black hover:border hover:border-gray-300">
                  Registrarse
                </button>
              </form>
              <div className="text-center text-gray-400">
                ¿Ya tienes una cuenta?
                <Link to={"/login"} className="font-bold text-black">
                  {" "}
                  Inicia Sesión{" "}
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src="/public/img/image.jpg"
                alt="img"
                className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
              />
              <div className="absolute hidden bottom-10 right-6 p-6 bg-white bg-opacity-30 backdrop-blur-sm rounded drop-shadow-lg md:block">
                <span className="text-white text-xl">
                  Regístrate hoy y descubre un mundo de tecnología: productos de
                  calidad, precios competitivos, seguridad en tus compras y
                  actualizaciones exclusivas.
                </span>
              </div>
            </div>
          </div>
        </main>
      </main>
    </div>
  );
}
