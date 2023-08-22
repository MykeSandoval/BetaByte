import { Route, Link } from "@tanstack/react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from "swiper/modules";
import { rootRoute } from "../Root";
import { useState } from "react";
import "swiper/css";

export const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/i",
  component: Index,
});

function Index() {
  const [items] = useState([
    {
      hero: true,
      img: "img/banner1.jpg",
      title: "TE LA ENTERRAMOS CON LOS PRODUCTOS",
      description: (
        <>
          100% ORIGINALES <br /> CALIDAD GARANTIZADA
        </>
      ),
      href: "#",
    },
    {
      hero: false,
      img: "img/banner2.png",
    },
    {
      hero: false,
      img: "img/banner5.png",
    },
  ]);

  const cards = [
    {
      icon: "plane-up",
      title: "Envío gratuito a nivel nacional",
      description: "En pedido superior a $90.000 Pesos",
    },
    {
      icon: "wallet",
      title: "Contrareembolso",
      description: "100% garantía de devolución de dinero",
    },
    {
      icon: "gift",
      title: "Tarjeta regalo especial",
      description: "Ofrece bonos especiales con regalo",
    },
    {
      icon: "headset",
      title: "Servicio al cliente 24/7",
      description: "Llámenos 24/7 al 123-456-7890",
    },
  ];

  const bestCategories = [
    {
      img: "img/Celulares.jpg",
      name: "Celulares",
      href: "#",
    },
    {
      img: "img/Computacion.jpg",
      name: "Computacion",
      href: "#",
    },
    {
      img: "img/Consolas.jpg",
      name: "Consolas",
      href: "#",
    },
  ];

  return (
    <>
      <header>
        <header className="bg-background">
          <div className="container py-6 flex flex-col gap-3 justify-evenly items-center md:flex-row">
            <div className="flex items-center gap-5">
              <i className="fa-solid fa-headset text-5xl" />
              <div className="flex flex-col">
                <span>Servicio al Cliente</span>
                <span>123-456-7890</span>
              </div>
            </div>
            <Link to={"/"} className="flex items-center gap-5">
              <img className="h-10" src="img/Logo.png" alt="Logo de Betabyte" />
              <h1 className="font-semibold text-4xl uppercase">Betabyte</h1>
            </Link>
            <div className="flex items-center gap-3 text-5xl">
              <Link
                to={"/login"}
                className="fa-solid fa-user opacity-30"
              ></Link>
              <span className="mx-2 h-10 border-l border-solid border-black"></span>
              <Link
                to={"#"}
                className="fa-solid fa-basket-shopping opacity-30"
              ></Link>
              <div className="flex flex-col text-base">
                <span>Carrito</span>
                <span>( {0} )</span>
              </div>
            </div>
          </div>
        </header>
        <nav className="bg-primary">
          <div className="container flex justify-around items-center p-5">
            <ul className="flex flex-col md:flex-row gap-5 font-semibold text-xl only:bg-red-500 list-none">
              <li className="hover:text-white group relative">
                <Link to={"#"}>CATEGORÍAS</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>HISTORIAL</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>VENDER</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>SOBRE NOSOTROS</Link>
              </li>
              <li className="hover:text-white">
                <Link to={"#"}>AYUDA</Link>
              </li>
            </ul>
            <form className="flex items-center border-2 border-solid border-white bg-white rounded-full overflow-hidden">
              <input
                type="text"
                name="search"
                placeholder="Buscar..."
                className="px-3 outline-none p-2 border-none "
              />
              <button className="bg-primary p-3">
                <i className="fa-solid fa-magnifying-glass text-white mr-1" />
              </button>
            </form>
          </div>
        </nav>
      </header>
      <section>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, Autoplay]}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
        >
          {items.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="relative w-full overflow-hidden h-[450px] text-white text-center">
                <img src={item.img} className="w-full h-full object-cover" />
                {item.hero && (
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/40 p-5 rounded-3xl">
                    <h2
                      className="text-3xl text-background font-semibold mb-3"
                      style={{ textWrap: "balance" }}
                    >
                      {item.title}
                    </h2>
                    <div className="flex flex-col mb-3 text-lg">
                      <span>{item.description}</span>
                    </div>
                    <div className="button">
                      <a href={item.href} className="btn-1">
                        Comprar ahora
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <main className="bg-background">
        <section className="grid grid-cols-1 gap-12 py-12 md:grid-cols-2 lg:grid-cols-4 mx-6">
          {cards.map((card, i) => (
            <div
              key={i}
              className="flex items-center justify-between gap-6 bg-white rounded-2xl p-4"
            >
              <i className={`fa-solid fa-${card.icon} text-5xl text-primary`} />
              <div className="flex flex-col w-full">
                <span className="font-bold font-lg">{card.title}</span>
                <span className="text-[#777]">{card.description}</span>
              </div>
            </div>
          ))}
        </section>
        <section className="flex flex-col items-center justify-center">
          <h2 className="flex flex-col gap-2 mb-3 text-4xl font-bold">
            Mejores Categorías
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-3 md:gap-25 md:flex-col">
            {bestCategories.map((category, i) => (
              <div key={i} className="bg-background rounded-xl p-1 md:p-6">
                <a
                  href={category.href}
                  className={`card-category category-${category.name.toLowerCase()}`}
                >
                  <div
                    className="category-image"
                    style={{ backgroundImage: `url(${category.img})` }}
                  />
                  <p className="text-white capitalize">{category.name}</p>
                  <span className="text-white">Ver más</span>
                </a>
              </div>
            ))}
          </div>
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
      </main>
    </>
  );
}
