import { BurguerList } from "../components"
import { burguers } from "../data"

export const ProductsView = () => {
  return (
    <section className="bg-red-600 min-h-screen pb-24" id="burguers">
     <BurguerList burguers={burguers} />   
    </section>
  )
}
