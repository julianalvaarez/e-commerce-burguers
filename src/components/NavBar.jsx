import { useContext, useState } from "react";
import { FaBars, FaChevronRight } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { Link } from "react-router-dom";
import { BurguerContext } from "../context/BurguerContext";

export const NavBar = ({carritoView, setCarritoView}) => {
    const {carrito} = useContext(BurguerContext)
    const [navState, setNavState] = useState(false)

    const handleClickCart = () => {
      setCarritoView(!carritoView)
    }
    
  return (
    <header className="bg-red-600 text-white py-4">
      <nav className="p-3">
        <div className="flex justify-between md:justify-around mx-4 items-center gap-4">
          <a href="#home" className='font-semibold text-xl'>
            {/* <img src="burguer5.png" alt="Burguers" className="w-20" /> */}
            Burguers Shop
          </a>
          <ul className='gap-10 font-semibold text-xl hidden lg:flex'>
            <li className="hover:underline "><a href="#services">Servicios</a></li>
            <li className="hover:underline "><a href="#burguers">Hamburguesas</a></li>
            <li className="hover:underline "><a href="#contact">Contacto</a></li>
          </ul>
          <div className="flex gap-5 items-center">
            <div className="hover:underline font-semibold text-lg lg:flex hidden"><Link to='/burguer'>¡Tu Hamburguesa Favorita!</Link></div>
            <div className="font-semibold text-lg hidden lg:flex cursor-pointer"  onClick={handleClickCart}><p>Mi Pedido <span className="bg-white rounded-full text-red-600 px-2 py-1">{carrito.length}</span></p></div>
          </div>
          <div className="text-2xl lg:hidden flex" onClick={handleClickCart}>
            <div><GiShoppingBag /></div><div className="bg-white rounded-full text-xs font-semibold items-center text-red-600 px-2 py-1">{carrito.length}</div>
          </div>
          <div className="text-2xl lg:hidden" onClick={() => setNavState(!navState)}>
            {navState ?  <FaChevronRight/> : <FaBars />}
          </div>
        </div>


        {navState && (
          <ul className="flex flex-col items-end font-medium mr-3 my-3 gap-3 text-md lg:hidden">
            <li className="active:underline "><a href="#services">Servicios</a></li>
            <li className="active:underline "><a href="#burguers">Hamburguesas</a></li>
            <li className="active:underline "><a href="#contact">Contacto</a></li>
            <li className="active:underline font-semibold"><Link to='/burguer'>¡Tu Hamburguesa Favorita!</Link></li>
          </ul>
        )}
      </nav>
    </header>
  );
};
