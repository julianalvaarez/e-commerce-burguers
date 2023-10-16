import { useState } from "react";
import { HomeView, ServiceView, ProductsView, ContactView } from "../views";
import { NavBar, Cart } from "../components";

export const HomePage = () => {
  const [carritoView, setCarritoView] = useState(false);

  return (
    <>
      <NavBar carritoView={carritoView} setCarritoView={setCarritoView} />
      {carritoView && <Cart />}
      <HomeView />
      <ServiceView />
      <ProductsView />
      <ContactView />
    </>
  );
};
