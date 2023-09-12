import { useState } from "react";
import { Link } from "@tanstack/react-router";

export function Header() {
  const [isCategoriesOpen, setIsCategoriesOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [timerId, setTimerId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timerId);
    setIsCategoriesOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      if (!isMouseInsideCategory) {
        setIsCategoriesOpen(false);
        setSelectedCategory(null);
      }
    }, 500);
    setTimerId(id);
  };

  const [isMouseInsideCategory] = useState(false);

  const categories = [
    {
      name: "CELULARES",
      subCategories: [
        "Accesorios para Celulares",
        "Celulares y Smartphones",
        "Gafas de Realidad Virtual",
        "Radios y Handies",
        "Repuestos de Celulares",
        "Smartwatches y Accesorios",
        "Otros",
      ],
    },
    {
      name: "COMPUTADORAS",
      subCategories: [
        "Accesorios para PC Gaming",
        "Almacenamiento",
        "Cables y Hubs USB",
        "Componentes de PC",
        "Conectividad y Redes",
        "Estabilizadores y UPS",
        "Impresión",
        "Lectores y Scanners",
        "Limpieza y Cuidado de PCs",
        "Monitores y Accesorios",
        "PC de Escritorio",
        "Palms, Agendas y Accesorios",
        "Periféricos de PC",
        "Portátiles y Accesorios",
        "Software",
        "Tablets y Accesorios",
        "Video Beams y Pantallas",
        "Otros",
      ],
    },
    {
      name: "CONSOLAS",
      subCategories: [
        "Accesorios para Consolas",
        "Accesorios para PC Gaming",
        "Consolas",
        "Pinballs y Máquinas de Juego",
        "Repuestos para Consolas",
        "Videojuegos",
        "Otros",
      ],
    },
  ];

  const selectCategory = (categoryName) => {
    setSelectedCategory(categoryName);
  };
  return (
    <header>
      <header className="bg-background overflow-y-hidden">
        <div className="container py-6 flex flex-col gap-3 justify-evenly items-center md:flex-row">
          <div className="flex items-center gap-5">
            <i className="fa-solid fa-headset text-5xl" />
            <div className="flex flex-col">
              <span>Servicio al Cliente</span>
              <span>123-456-7890</span>
            </div>
          </div>
          <Link to={"/"} className="flex items-center gap-5">
            <img className="h-10" src="/img/Logo.png" alt="Logo de Betabyte" />
            <h1 className="font-semibold text-4xl uppercase">Betabyte</h1>
          </Link>
          <div className="flex items-center gap-3 text-5xl">
            <Link to={"/login"} className="fa-solid fa-user opacity-30"></Link>
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
        <div className="container flex flex-col lg:flex-row justify-around items-center p-5 gap-3">
          <ul className="flex flex-col md:flex-row gap-5 font-semibold text-xl only:bg-red-500 list-none">
            <div className="flex">
              <div className="w-1/4 relative">
                <li
                  className="group relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <button className="hover:text-white flex items-center">
                    {" "}
                    CATEGORÍAS
                    <i
                      className={`fas ${
                        isCategoriesOpen ? "fa-chevron-up" : "fa-chevron-down"
                      } ml-2`}
                    />
                  </button>
                  {isCategoriesOpen && (
                    <div className="absolute -left-4 mt-4 z-10 flex">
                      <div className="w-4 h-4 bg-gray-700 transform rotate-45 absolute -top-2 right-14" />
                      <div className="w-full">
                        <ul className="bg-gray-700 text-white py-3 rounded-md shadow-md">
                          {categories.map((category, index) => (
                            <li
                              key={index}
                              className={`px-2 hover:bg-blue-500 hover:shadow-blue-400 cursor-pointer`}
                              onMouseEnter={() => {
                                if (selectedCategory === category.name) {
                                  selectCategory(null);
                                } else {
                                  selectCategory(category.name);
                                }
                              }}
                            >
                              <a href={category.href}>
                                <span className="flex items-center">
                                  {category.name}
                                  <i
                                    className={`fas fa-chevron-right pl-5 ml-auto m-2`}
                                  />
                                </span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </li>
              </div>
              <div className="w-full">
                {selectedCategory && (
                  <div
                    className="absolute left-1/4 mt-11 z-10 -ml-1"
                    style={{ right: "100px" }}
                  >
                    <div className="bg-white border border-gray-300 p-4 rounded-e flex flex-wrap">
                      <h2 className="text-lg font-semibold text-center">
                        {selectedCategory}
                      </h2>
                      <hr className="my-5 w-full border-t border-gray-300" />
                      <ul className="flex flex-wrap -m-2">
                        {categories
                          .find(
                            (category) => category.name === selectedCategory
                          )
                          .subCategories.map((subCategory, subIndex) => (
                            <li
                              key={subIndex}
                              className={`text-sm text-gray-600 hover:text-gray-800 m-2 mx-5 mb-5 ${
                                subIndex % 3 === 0 ? "md:w-1/3" : "md:w-1/4"
                              }`}
                            >
                              <a href={subCategory.href}>{subCategory}</a>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <li className="hover:text-white">
              <Link to={"#"}>HISTORIAL</Link>
            </li>
            <li className="hover:text-white">
              <Link to={"#"}>VENDER</Link>
            </li>
            <li className="hover:text-white">
              <Link to={"#"}>OFERTAS</Link>
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
  );
}
