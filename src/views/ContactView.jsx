
export function ContactView() {
    function handleSubmit(e) {
        e.preventDefault()
        e.reset()
    }
    const style = "border px-7 py-2 text-white bg-transparent rounded-full mt-5 active:text-white transition-all hover:bg-red-700 active:bg-red-900 placeholder:text-red-200 w-full"

  return (
    <footer id="contact" className="bg-red-600 py-3">
        <hr className="mb-10" />
        <h2 className="text-white text-center font-semibold text-2xl">CONTACTO</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center justify-center mt-4 mx-10">
            <div className="flex flex-col w-full gap-4 md:flex-row">
                <input className={style} type="text" placeholder="Ingrese su Nombre Completo" required/>
                <input className={style} type="email" placeholder="Ingrese su Correo Electronico" required/>
            </div>
            <input className={style} type="textarea" placeholder="Ingrese su mensaje" required/>
            <input type="submit" className="border px-7 py-2 text-white bg-transparent rounded-full mt-5 active:text-white transition-all hover:bg-red-700 hover:scale-105 active:bg-red-900"/>
        </form> 
    </footer>
  )
}
  