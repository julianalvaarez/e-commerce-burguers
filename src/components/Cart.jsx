import { CartItem } from "./";
import { BurguerContext } from "../context/BurguerContext";
import { useContext } from "react";

export const Cart = () => {
  const { carrito, total, countProducts } = useContext(BurguerContext);

  return (
    <div className="w-full flex flex-col absolute items-end">
      {carrito.length < 1 ? (
        <span className="xl:mr-10 z-20 bg-red-600 text-white text-center font-bold p-5 shadow-2xl shadow-red-700 rounded-xl">
          NO HAY PRODUCTOS EN EL CARRITO
        </span>
      ) : (
        <div className="xl:mr-10 flex flex-col z-20 bg-red-600 text-white p-3 shadow-2xl shadow-red-700 rounded-xl">
          <table>
            <thead>
              <tr className="text-center">
                <td className="border-2">Imagen</td>
                <td className="border-2">Producto</td>
                <td className="border-2 p-2 px-3">Precio</td>
                <td className="border-2 p-2 px-3">Eliminar</td>
              </tr>
            </thead>
            <tbody>
              {carrito.map((productoCarrito) => (
                <CartItem
                  key={productoCarrito.id}
                  productoCarrito={productoCarrito}
                />
              ))}
            </tbody>
          </table>

          <div className="my-2 md:text-lg">
            <p>Productos Totales: {countProducts}</p>
            <p>Total Compra: {total}</p>
          </div>
        </div>
      )}
    </div>
  );
};
