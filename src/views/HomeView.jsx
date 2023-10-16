
export const HomeView = () => {
  return (
    <div id="home" className="bg-red-600" style={{height: 'calc(100vh - 100px)'}}>
      <main>
        <div className="flex flex-col items-center text-white pb-7 lg:flex-row lg:pb-0 lg:mx-10 lg:pt-10 2xl:pt-32 lg:justify-around">
          <div className=" lg:mt-16 lg:w-1/2 flex flex-col items-center">
            <h1 className="font-bold text-3xl text-center  mt-4 lg:text-left lg:w-2/3 lg:text-5xl">LAS HAMBURGUESAS MAS BARATAS Y RICAS</h1>
            <p className="text-sm text-center mx-4 mt-4 text-gray-200 lg:text-start lg:mx-0 lg:w-2/3 lg:mt-8 lg:mb-8 leading-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eligendi cum nobis tenetur repudiandae! Voluptatem dicta corrupti repellat commodi doloremque numquam eum ex similique, voluptate neque, quos delectus eligendi ratione?</p>
            <div className="grid place-items-center lg:place-content-start"><a href="#services" className="bg-transparent px-5 py-2 rounded-full buttonInfo text-sm my-7 active:bg-white active:text-red-600 transition-all hover:shadow-lg hover:shadow-red-800 hover:scale-105 lg:text-base lg:px-7 lg:py-3 lg:mx-auto">Informacion</a></div>
          </div>
          <div className="lg:w-1/2">
            <img src="combo.png" alt="Burguers Inc." className="lg:w-4/6 lg:mx-auto" />
          </div>
        </div>
      </main>
    </div>
  )
}
