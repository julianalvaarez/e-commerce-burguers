import { useContext } from "react"
import { BurguerContext } from "../context/BurguerContext"

export const BurguerCard = ({burguer}) => {
  const {id, name, price, image, ingredients} = burguer
  const {addToCarrito, carrito} = useContext(BurguerContext)
  const product_count_carrito = carrito.includes(burguer) ? `(${carrito.filter(item => item === burguer).length})`: ''
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center bg-slate-100 p-6 m-4 rounded-lg shadow-xl shadow-red-900 select-none">
        <div className="text-center mb-4 sm:flex-1 ">
          <h4 className="font-bold lg:text-xl">{name}</h4>
          <h6 className="buttonPedir font-semibold px-3 py-2 inline-flex text-red-600 rounded-3xl my-2">$ {price}</h6>
          <p><span className="font-semibold lg:text-lg">Ingredientes:</span> {ingredients.join(' - ')}</p>
          <button className="buttonPedir font-semibold px-5 py-2 text-red-700 bg-transparent rounded-full mt-5 active:bg-red-600 active:text-white transition-all hover:shadow-lg hover:shadow-red-200" onClick={() => addToCarrito(burguer)}>Pedir {product_count_carrito}</button>
        </div>
        <img src={image} alt={name} className="w-28 sm:flex-1" />
      </div>
    </>
  )
}
