import { BurguerList } from "./";

export const BurguerFavourite = ({ filteredHamburgers }) => {
  return (
    <>
      {filteredHamburgers < 1 ? (
        <div className="flex justify-center pt-20 text-xl md:text-2xl text-white font-bold leading-loose text-center"><p>NO HAY HAMBURGUESAS ACORDES A TUS GUSTOS O INTENTE DE NUEVO, PORFAVOR</p></div>
      ) : (
        <div className="flex flex-col items-center">
          <h5 className="text-white font-bold mx-4 text-lg lg:text-2xl md:text-xl pt-9">Tus hamburguesas ideales son: </h5>
          <div>
            <BurguerList burguers={filteredHamburgers} />
          </div>
        </div>
      )}
    </>
  );
};
