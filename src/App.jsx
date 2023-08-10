import { useEffect, useState } from "react";

function App() {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    new globalThis.Swiper(".mySwiper-1", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 3000, // Tiempo de espera (en milisegundos) entre cada transición de diapositiva (3 segundos en este caso)
        disableOnInteraction: false, // Permitir que el autoplay continúe incluso cuando el usuario interactúa con el carrusel
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  });

  return (
    <>
      <header>
        <div className="container-hero">
          <div className="container hero">
            <div className="customer-support">
              <i className="fa-solid fa-headset"></i>
              <div className="content-customer-support">
                <span className="text">Servicio al cliente</span>
                <span className="number">123-456-7890</span>
              </div>
            </div>
            <div className="container-logo">
              <a href="/">
                <img
                  className="logo-img"
                  src="img/Logo.png"
                  alt="BetaByte Logo"
                />
              </a>
              <h1 className="logo">
                <a href="/">BetaByte</a>
              </h1>
            </div>
            <div className="container-user">
              <a href="Login-register/Login.html">
                <i className="fa-solid fa-user"></i>
              </a>
              <i className="fa-solid fa-basket-shopping"></i>
              <div className="content-shopping-cart">
                <span className="text">Carrito</span>
                <span className="number">({cartCount})</span>
              </div>
            </div>
          </div>
        </div>
        <div className="container-navbar">
          <nav className="navbar conatiner">
            <i className="fa-solid fa-bars"></i>
            <ul className="menu">
              <li>
                <a href="#">Categorías</a>
              </li>
              <li>
                <a href="#">Historial</a>
              </li>
              <li>
                <a href="#">Vender</a>
              </li>
              <li>
                <a href="#">Sobre nosotros</a>
              </li>
              <li>
                <a href="#">Ayuda</a>
              </li>
            </ul>
            <form className="search-form">
              <input type="search" placeholder="Buscar..." />
              <button className="btn-search">
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </form>
          </nav>
        </div>
      </header>
      <div className="banner">
        <div className="swiper mySwiper-1">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div
                className="slider"
                style={{ backgroundImage: "url(img/banner1.jpg)" }}
              >
                <div className="slider-txt">
                  <h1>TE LA ENTERRAMOS CON LOS PRODUCTOS</h1>
                  <p>100% ORIGINALES</p>
                  <p>CALIDAD GARANTIZADA</p>
                  <div className="button">
                    <a href="#" className="btn-1">
                      Comprar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="slider"
                style={{ backgroundImage: "url(img/banner1.jpg)" }}
              >
                <div className="slider-txt">
                  <h1>TE LA ENTERRAMOS CON LOS PRODUCTOS</h1>
                  <p>100% ORIGINALES</p>
                  <p>CALIDAD GARANTIZADA</p>
                  <div className="button">
                    <a href="#" className="btn-1">
                      Comprar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div
                className="slider"
                style={{ backgroundImage: "url(img/banner1.jpg)" }}
              >
                <div className="slider-txt">
                  <h1>TE LA ENTERRAMOS CON LOS PRODUCTOS</h1>
                  <p>100% ORIGINALES</p>
                  <p>CALIDAD GARANTIZADA</p>
                  <div className="button">
                    <a href="#" className="btn-1">
                      Comprar ahora
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-button-next"></div>
          <div className="swiper-button-prev"></div>
          <div className="swiper-pagination"></div>
        </div>
      </div>
      <main className="main-content">
        <section className="container container-features">
          <div className="card-feature">
            <i className="fa-solid fa-plane-up"></i>
            <div className="feature-content">
              <span>Envío gratuito a nivel nacional</span>
              <p>En pedido superior a $90.000 Pesos</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-wallet"></i>
            <div className="feature-content">
              <span>Contrareembolso</span>
              <p>100% garantía de devolución de dinero</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-gift"></i>
            <div className="feature-content">
              <span>Tarjeta regalo especial</span>
              <p>Ofrece bonos especiales con regalo</p>
            </div>
          </div>
          <div className="card-feature">
            <i className="fa-solid fa-headset"></i>
            <div className="feature-content">
              <span>Servicio al cliente 24/7</span>
              <p>Llámenos 24/7 al 123-456-7890</p>
            </div>
          </div>
        </section>
        <section className="container top-categories">
          <h1 className="heading-1">Mejores Categorías</h1>
          <div className="container-categories">
            <div className="card-category category-celulares">
              <p>Celulares</p>
              <span>Ver más</span>
            </div>
            <div className="card-category category-computacion">
              <p>Computación</p>
              <span>Ver más</span>
            </div>
            <div className="card-category category-consola">
              <p>Consolas</p>
              <span>Ver más</span>
            </div>
          </div>
        </section>

        <section className="container top-products">
          <h1 className="heading-1">Mejores Productos</h1>
          <div className="container-options">
            <span className="active">Destacados</span>
            <span>Más recientes</span>
            <span>Mejores vendidos</span>
          </div>

          <div className="container-products">
            <div className="card-product">
              <div className="container-img">
                <img src="img/RTX.jpg" alt="Tarjeta grafica" />
                <span className="discount">-13%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>Grafica NVIDIA RTX4090</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  $8.700.000 <span>$10.000.000</span>
                </p>
              </div>
            </div>
            <div className="card-product">
              <div className="container-img">
                <img src="img/Iphone.jpg" alt="Iphone" />
                <span className="discount">-13%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>Iphone 13</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  $2.610.000 <span>$3.000.000</span>
                </p>
              </div>
            </div>
            <div className="card-product">
              <div className="container-img">
                <img src="img/PC gamer.jpg" alt="PC" />
                <span className="discount">-20%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>PC GAMER</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  $4.000.000 <span>$5.000.000</span>
                </p>
              </div>
            </div>
            <div className="card-product">
              <div className="container-img">
                <img src="img/PS5.jpg" alt="Play" />
                <span className="discount">-25%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>PlayStation 5</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  $2.699.250 <span>$3.599.000</span>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="img">
          <img
            src="img/PS4pro.jpg"
            alt="gallery PS4pro"
            className="img-img-1"
          />
          <img
            src="img/PC gamer2.jpg"
            alt="gallery PC gamer2"
            className="img-img-2"
          />
          <img
            src="img/Samsung.jpg"
            alt="gallery Samsung"
            className="img-img-3"
          />
          <img
            src="img/portatil-samsung.jpg"
            alt="gallery portatil-samsung"
            className="img-img-4"
          />
          <img
            src="img/auriculares.jpg"
            alt="gallery auriculares"
            className="img-img-5"
          />
        </section>

        <section className="container special">
          <h1 className="heading-1">Especiales </h1>

          <div className="container-products">
            <div className="card-product">
              <div className="container-img">
                <img
                  src="img/mouse Logitech G502.jpg"
                  alt="/mouse Logitech G502"
                />
                <span className="discount">-20%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>Mouse Logitech G502</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  399.200 <span>$499.000</span>
                </p>
              </div>
            </div>
            <div className="card-product">
              <div className="container-img">
                <img src="img/Machenike K500.jpg" alt="Machenike K500" />
                <span className="discount">-20%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>Teclado Machenike K500</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  $295.000 <span>$369.000</span>
                </p>
              </div>
            </div>
            <div className="card-product">
              <div className="container-img">
                <img
                  src="img/portatil MSI katana GF66.jpg"
                  alt="portatil MSK"
                />
                <span className="discount">-20%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>Portatil MSI katana GF66</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  4.000.000 <span>$5.000.000</span>
                </p>
              </div>
            </div>
            <div className="card-product">
              <div className="container-img">
                <img src="img/switch.png" alt="switch" />
                <span className="discount">-20%</span>
                <div className="button-group">
                  <span>
                    <i className="fa-solid fa-eye"></i>
                  </span>
                  <span>
                    <i className="fa-regular fa-heart"></i>
                  </span>
                  <span>
                    <i className="fa-solid fa-code-compare"></i>
                  </span>
                </div>
              </div>
              <div className="content-card-product">
                <div className="stars">
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-solid fa-star"></i>
                  <i className="fa-regular fa-star"></i>
                </div>
                <h3>Switch</h3>
                <span className="add-cart" onClick={()=>setCartCount(cartCount+1)}>
                  <i className="fa-solid fa-basket-shopping"></i>
                </span>
                <p className="price">
                  $1.200.000 <span>$1.500.000</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="container-service">
          <h1 className="heading-1">Servicios</h1>
          <div className="column-container">
            <div className="service-box">
              <span>
                <i className="fa-brands fa-whatsapp"></i>
              </span>
              <div className="content-box">
                <h3>Whatsapp</h3>
                <p>Dudas y consultas</p>
              </div>
            </div>
            <div className="service-box">
              <span>
                <i className="fa-solid fa-truck"></i>
              </span>
              <div className="content-box">
                <h3>Envíos Rápidos</h3>
                <p>A todo Colombia</p>
              </div>
            </div>
            <div className="service-box">
              <span>
                <i className="fa-regular fa-clock"></i>
              </span>
              <div className="content-box">
                <h3>Tienda Abierta</h3>
                <p>Todo los días 24/7</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container container-footer">
          <div className="menu-footer">
            <div className="continer-links_de_interes">
              <p className="title-footer">LINKS DE INTERES</p>
              <ul>
                <li>Nuestra Marca</li>
                <li>Club Coleccionista</li>
                <li>Pregunta Frecuente </li>
                <li>Trabaje con Nostros</li>
                <li>Politica de envio y Devoluciones </li>
                <li>Politica de Cambio</li>
                <li>Nuestra Garantia </li>
                <li>Recomendaciones de Uso</li>
                <li>ventas coorporativas</li>
                <li>Termino y Condiciones de Promocion </li>
              </ul>
              <div className="social-icono">
                <samp className="facebook">
                  {" "}
                  <i className="fa-brands fa-facebook-f"></i>{" "}
                </samp>
                <samp className="twitter">
                  {" "}
                  <i className="fa-brands fa-twitter"></i>{" "}
                </samp>
                <samp className="instagram">
                  {" "}
                  <i className="fa-brands fa-instagram"></i>{" "}
                </samp>
                <samp className="youtube">
                  {" "}
                  <i className="fa-brands fa-youtube"></i>{" "}
                </samp>
              </div>
            </div>
          </div>

          <div className="menu-footer">
            <div className="servivio_al_cliente">
              <p className="title-footer">SERVICIO AL CLIENTE</p>
              <ul>
                <li>
                  <a href="#">Como comprar Online</a>
                </li>
                <li>
                  <a href="#">Terminos de Uso</a>
                </li>
                <li>
                  <a href="#">Politica de Privacidad</a>
                </li>
                <li>
                  <a href="#">Estatuto del Consumidor</a>
                </li>
                <li>
                  <a href="#">Compra Segura</a>
                </li>
                <li>
                  <a href="#">Nuestra Tienda</a>
                </li>
                <li>
                  <a href="#">Contactenos</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="menu-footer">
            <div className="my-account">
              <p className="title-footer">MI CUENTA</p>
              <ul>
                <li>
                  <a href="#">Mi cuenta</a>
                </li>
              </ul>
            </div>
            <div className="copyright">
              <p className="footer-text">
                Desarrollado por los estudiantes del Sena &copy; 2023
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}


export default App;
