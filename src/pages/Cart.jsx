import { Route } from "@tanstack/react-router";
import { rootRoute } from "../Root";
import { Header } from "../components/Header";

export const oneCartRoute = new Route({
  getParentRoute: () => rootRoute,
  path: "/cart",
  component: Cart,
});

function Cart() {
  // Supongamos que tienes una lista de productos en un array llamado "productos"
  const productos = [
    { id: 1, nombre: "Producto 1", precio: 10 },
    { id: 2, nombre: "Producto 2", precio: 15 },
    { id: 3, nombre: "Producto 3", precio: 20 },
  ];

  // Calcular el total de los productos
  const calcularTotal = () => {
    return productos.reduce((total, producto) => total + producto.precio, 0);
  };

  return (
    <>
      <Header title="Cart" />
      <div className="container mx-auto p-4 font-poppins">
        <h1 className="text-4xl text-center mb-4">Mi carrito</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {productos.map((producto) => (
            <div key={producto.id} className="bg-white rounded shadow p-4">
              <h2 className="text-xl font-semibold">{producto.nombre}</h2>
              <p className="text-gray-500">${producto.precio}</p>
            </div>
          ))}
        </div>
        <div className="text-xl text-center mt-4">
          Total: ${calcularTotal()}
        </div>
      </div>
    </>
  );
}