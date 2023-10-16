import { createContext } from "react";
import { useCart } from "../hooks";


export const BurguerContext = createContext()


export const BurguerContextProvider = ({children}) => {
  const { carrito, total, countProducts, deleteToCarrito, addToCarrito } = useCart();

  return (
    <BurguerContext.Provider value={{carrito, total, countProducts, deleteToCarrito, addToCarrito}}>
        {children}
    </BurguerContext.Provider>
  )
}
