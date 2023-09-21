import { useState } from "react";
import { Route, useParams, Link } from "@tanstack/react-router";
import { rootRoute } from "../Root";
import { Header } from "../components/Header";
import Modal from "react-modal";

Modal.setAppElement("#root");

export const oneProductRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/product/$id",
  component: Product,
});

function Product() {
  const { id } = useParams();
  const navigationHierarchy = [
    { label: "Inicio", to: "/" },
    { label: "Categorías", to: "/categorias" },
    { label: "Componentes de PC", to: "/categorias/componentes-pc" },
    {
      label: "TARJETAS GRAFICAS",
      to: `/categorias/componentes-pc/producto/${id}`,
    },
  ];

  const [selectedImage, setSelectedImage] = useState("/public/img/RTX.jpg");

  const handleThumbnailClick = (newImage) => {
    setSelectedImage(newImage);
  };

  const images = [
    "/public/img/RTX.jpg",
    "/public/img/RTX 2.jpg",
    "/public/img/RTX 3.jpg",
    "/public/img/RTX 4.jpg",
  ];

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const [cantidad, setCantidad] = useState(1);

  return (
    <div>
      <Header />
      <div className="container-title bg-gray-200 px-12 p-4 text-base font-semibold mb-4">
        <nav className="breadcrumbs">
          {navigationHierarchy.map((item, index) => (
            <span key={item.to}>
              <Link to={item.to}>{item.label}</Link>
              {index < navigationHierarchy.length - 1 && " > "}
            </span>
          ))}
        </nav>
      </div>
      <main className="flex justify-center px-12 gap-12">
        <div className="container-images flex-1">
          <div className="image-list flex flex-wrap gap-9">
            <div className="main-image">
              <img
                src={selectedImage}
                alt="imagen-producto"
                className="max-h-full border border-gray-300 rounded-sm"
              />
            </div>
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`imagen-producto-${index}`}
                className={`px- max-h-24 px-5 mb-5 border border-gray-300 rounded-sm cursor-pointer ${
                  image === selectedImage ? "selected" : "opacity-50"
                }`}
                onClick={() => handleThumbnailClick(image)}
              />
            ))}
          </div>
        </div>
        <div className="container-info-product flex-1">
          <div className="container-price flex flex-col p-4 border-b border-gray-300">
            <span className="text-2xl font-semibold mb-2">
              Tarjeta Grafica NVIDIA RTX4090
            </span>
            <div className="flex items-center  gap-2 justify-start">
              <div className="mr-2 py-5">
                <span className="text-4xl font-semibold">$8.000.000</span>
              </div>
              <div className="text-red-500">
                <span className="text-xl line-through">$10.000.000</span>
              </div>
            </div>
            <div className="text-gray-600">
              <span className="text-sm"> Hasta 48 cuotas </span>
            </div>
            <img
              src="/public/credit/Visa.png"
              alt="Tarjeta de credito"
              className="py-2 w-40 h-15"
            />
            <div>
              <button
                className="text-blue-500 hover:underline"
                onClick={openModal}
              >
                Más información
              </button>

              {modalIsOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50">
                  <div className="modal-bg fixed inset-0 bg-black opacity-50"></div>
                  <div className="modal-content bg-white p-4 rounded-lg shadow-lg relative">
                    <button
                      className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                      onClick={closeModal}
                    >
                      &times;
                    </button>
                    <h2 className="text-xl font-semibold pb-2">
                      Medios de pago para este producto
                    </h2>
                    <p className="border-b mb-4 pb-5">
                      Descripción detallada de los métodos de pago disponibles
                      para este producto.
                    </p>
                    <h1 className="text-base font-semibold pb-2">
                      Tarjetas de crédito
                    </h1>
                    <p className="text-base text-gray-500 pb-6">
                      Acreditación instantánea.
                    </p>
                    <h2 className="text-base font-medium pb-4">
                      Hasta 48 cuotas con interés
                    </h2>
                    <div className="flex flex-wrap gap-20">
                      <img
                        src="/public/credit/VISA-Logo.png"
                        alt="VISA"
                        className="w-10 h-5"
                      />
                      <img
                        src="/public/credit/MasterCard-Logo.png"
                        alt="MasterCard"
                        className="w-10 h-5"
                      />
                      <img
                        src="/public/credit/american-express-logo.png"
                        alt="American"
                        className="w-10 h-5"
                      />
                      <img
                        src="/public/credit/Diners_Club-logo.png"
                        alt="Diners"
                        className="w-10 h-5"
                      />
                    </div>
                    <div className="flex flex-wrap py-5 gap-14 border-b mb-4 pb-5">
                      <p className="text-xs text-gray-500 pb-2">36 Cuotas</p>
                      <p className="text-xs text-gray-500 pb-2">36 Cuotas</p>
                      <p className="text-xs text-gray-500 pb-2">36 Cuotas</p>
                      <p className="text-xs text-gray-500 pb-2">36 Cuotas</p>
                    </div>
                    <h1 className="text-base font-semibold pb-2">
                      Tarjetas de debito
                    </h1>
                    <p className="text-base text-gray-500 pb-6">
                      Acreditación instantánea.
                    </p>
                    <div className="flex flex-wrap gap-20 border-b mb-4 pb-8">
                      <img
                        src="/public/credit/Visa-debito.png"
                        alt="VISA, debito"
                        className="w-10 h-5"
                      />
                      <img
                        src="/public/credit/MasterCard-debito.png"
                        alt="MasterCard, debito"
                        className="w-10 h-5"
                      />
                    </div>
                    <h2 className="text-xl font-semibold pb-5">
                      {" "}
                      Otros medios de pago
                    </h2>
                    <p className="text-base font-semibold pb-2">
                      Eectivo en puntos de pago
                    </p>
                    <p className="text-base text-gray-500 pb-6">
                      Acreditación instantánea.
                    </p>
                    <div className="flex flex-wrap gap-20 pb-8">
                      <img
                        src="/public/credit/Efecty-logo.png"
                        alt="Efecty"
                        className="w-10 h-5"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex flex-wrap gap-1">
              <h2 className="py-4 font-semibold text-green-600 Text-xl">
                Envio gratis
              </h2>
              <p className="text-base py-4">a todo el pais</p>
            </div>
            <p className="text-sm py-2 mt-[-24px] text-gray-400 pb-5">
              No te preocupes, siempre llega.
            </p>
            <h2 className="py-4 font-semibold text-green-600 Text-xl">
              Devolución gratis
            </h2>
            <p className="text-sm py-2 mt-[-24px] text-gray-400 pb-5">
              Tienes 30 días desde que lo recibes.
            </p>
            <h2 className="py-4 font-semibold Text-base text-xl">
              Stock disponible
            </h2>
            <p className="text-sm py-2 mt-[-24px] text-gray-400 pb-6">
              Almacenado y enviado por nuestra compañia
            </p>
            <label htmlFor="quantity" className="font-semibold text-lg mt-2">
              Cantidad:
            </label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              min="1"
              value={cantidad}
              onChange={(e) => setCantidad(e.target.value)}
              className="w-16 px-2 py-1 border border-gray-300 rounded"
            />
            <button className="btn-clean bg-blue-600 mt-11 py-2 px-4 border border-blue-600 rounded text-white font-semibold hover:bg-blue-700">
              COMPRAR AHORA
            </button>
            <button className="btn-clean bg-blue-200 mt-5 py-2 px-4 border border-blue-200 rounded text-blue-500 font-semibold hover:bg-blue-300">
              AGREGAR AL CARRITO
            </button>
          </div>
        </div>
      </main>
      <section className="container-related-products">
        <h2 className="text-2xl py-8 font-semibold text-center border-b mb-4 pb-8">
          Descripcion
        </h2>
        <p className="text-3xl text-center font-bold mt-10 mb-10">
          PNY GeForce RTX® 4090 24GB XLR8 Gaming VERTO™ EPIC-X RGB Triple Fan
        </p>
        <div className="flex gap-4 mt-4">
          <div className="text-xl text-center">
            Multiprocesadores de transmisión NVIDIA Ada Lovelace Hasta el doble
            de rendimiento y eficiencia energética
          </div>
          <div className="text-xl text-center">
            Núcleos tensoriales de cuarta generación Hasta el doble de
            rendimiento de la IA
          </div>
          <div className="text-xl text-center">
            Núcleos RT de tercera generación Rendimiento de trazado de rayos de
            hasta 2X
          </div>
        </div>
        <p className="text-2xl text-center mt-7 mb-7 font-semibold">
          Visión general
        </p>
        <div className="flex">
          <p className="text-sm mx-12">
            Las GPU NVIDIA® GeForce RTX® 40 Series son más que rápidas para
            jugadores y creadores. Están impulsados por la arquitectura
            ultraeficiente NVIDIA Ada Lovelace que ofrece un salto cuántico
            tanto en rendimiento como en gráficos impulsados IA. Experimente
            mundos virtuales realistas con trazado de rayos y juegos FPS ultra
            altos con la latencia más baja. Descubra nuevas formas
            revolucionarias de crear y una aceleración del flujo de trabajo sin
            precedentes. NVIDIA® GeForce RTX® 4090 es la GPU GeForce definitiva.
            Brinda un gran salto en rendimiento, eficiencia y gráficos
            impulsados por IA. Experimente juegos de ultra alto rendimiento,
            mundos virtuales increíblemente detallados con ray tracing,
            productividad sin precedentes y nuevas formas de crear. Está
            impulsado por la arquitectura NVIDIA Ada Lovelace y viene con 24 GB
            de memoria G6X para brindar la mejor experiencia para jugadores y
            creadores. La nueva arquitectura NVIDIA® Ada Lovelace ofrece un
            salto cuántico en rendimiento, eficiencia y gráficos basados en IA.
            Tiene nuevos multiprocesadores de transmisión, núcleos de trazado de
            rayos de tercera generación y núcleos de tensor de cuarta
            generación. Se basa en un nuevo proceso TSMC 4N personalizado, se
            ejecuta con relojes ultrarrápidos y cuenta con una gran caché L2.
            Permite un trazado de rayos rápido, nuevas formas de crear y mucho
            más. Con iluminación EPIC-X RGB electrizante, para la mejor
            experiencia de iluminación controlable con infinitas posibilidades
            de iluminación ARGB.
          </p>
        </div>
        <p className="text-2xl text-center mt-7 mb-7 font-semibold">
          Caracteristicas
        </p>
        <ul className="text-center mb-8">
          <li>
            Dimensiones de la tarjeta – 331,8 x 136,8 x 71,1 mm; 3.5 Ranura
          </li>
          <li>Dimensiones de la caja – 405x199x103mm</li>
          <li>Núcleos NVIDIA® CUDA – 16384</li>
          <li>Velocidad de reloj – 2235 MHz</li>
          <li>Velocidad de impulso – 2565 MHz</li>
          <li>Velocidad de memoria (Gbps) – 21 Gb/s</li>
          <li>Tamaño de la memoria – 24GB GDDR6X</li>
          <li>Ancho de banda de memoria (GB/seg) – 1008 Gb/s</li>
          <li>TDP – 450W</li>
          <li>Enlace NV – No soportado</li>
          <li>Salidas – 3x DisplayPort 1.4, HDMI 2.1</li>
          <li>Pantalla multiple – Hasta 4</li>
          <li>Resolución – 7680 x 4320 a 120 Hz (digital)</li>
          <li>
            Entrada de alimentación – Uno de 16 pines (Uno de 16 pines a Cuatro
            de 8 pines)
          </li>
          <li>Tipo de autobús – PCI Express 4.0 x16</li>
        </ul>
        <div className="card-list-products grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"></div>
      </section>
      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 p-8">
          <div className="flex justify-center items-center">
            <figure>
              <img
                src="/img/Logo.2.png"
                alt="Logo de BetaByte"
                className="w-50 h-50"
              />
            </figure>
          </div>
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">SOBRE NOSOTROS</h2>
            <p>
              Bienvenido a Betabyte, tu destino en línea para descubrir
              productos tecnológicos de vanguardia a precios asequibles. Fundada
              con pasión por la tecnología y un compromiso inquebrantable con la
              satisfacción del cliente, en Betabyte nos enorgullece ser tu socio
              confiable en la búsqueda de las últimas innovaciones.
            </p>
          </div>
          <div className=" space-y-4">
            <h2 className="text-xl font-semibold">SIGUENOS</h2>
            <div className="flex space-x-10">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook text-xl"></i>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-instagram text-xl"></i>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-twitter text-xl"></i>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-youtube text-xl"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="bg-extra py-4 text-center">
          <small>
            &copy; 2023 <b>BetaByte</b> - Todos los Derechos Reservados.
          </small>
        </div>
      </footer>
    </div>
  );
}
