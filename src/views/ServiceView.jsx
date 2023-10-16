import {CiDeliveryTruck, CiShop, CiMobile1} from 'react-icons/ci';
;
export const ServiceView = () => {
  return (
    <section id='services'>
      <hr />
      <div className="flex flex-col lg:flex-row lg:my-18 justify-around w-full items-center py-10 bg-red-600 text-white">
        <div>
          <CiDeliveryTruck className="text-8xl mx-auto mb-2" />
          <h3 className="font-bold text-xl mb-1 text-center">DELIVERY</h3>
          <p className="text-center">Deliverys disponibles en todas <br /> las sucursales.</p>
          <hr className="my-6" />
        </div>
        <div>
          <CiShop className="text-8xl mx-auto mb-2" />
          <h3 className="font-bold text-xl text-center mb-1">
            ACEPTAMOS TARJETA
          </h3>
          <p className="text-center">
            Tarjeta de Credito, Debito <br /> y Mercado Pago.
          </p>
          <hr className="my-6" />
        </div>
        <div>
          <CiMobile1 className="text-8xl mx-auto mb-2" />
          <h3 className="font-bold text-xl text-center mb-1">
            APLICACION MOVIL
          </h3>
          <p className="text-center">
            Ya disponible la aplicacion para  <br /> hacer pedidos.
          </p>
          <hr className="hidden lg:block my-6" />
        </div>
      </div>
    </section>
  );
};
