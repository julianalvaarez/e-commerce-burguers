import { useEffect, useState } from "react";

export const useCart = () => {
  const [carrito, setCarrito] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });
  const [total, setTotal] = useState(() => {
    const storedTotalPrice = localStorage.getItem("totalPrice");
    return storedTotalPrice ? JSON.parse(storedTotalPrice) : 0;
  });
  const [countProducts, setCountProducts] = useState(() => {
    const storedTotalProducts = localStorage.getItem("countTotalProducts");
    return storedTotalProducts ? JSON.parse(storedTotalProducts) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(carrito));
    localStorage.setItem("totalPrice", JSON.stringify(total));
    localStorage.setItem("countTotalProducts", JSON.stringify(countProducts));
  }, [carrito]);

  const addToCarrito = (producto) => {
    setCarrito([...carrito, producto]);
    setTotal(total + producto.price);
    setCountProducts(countProducts + 1);
  };

  const deleteToCarrito = (id, productoPrecio) => {
    const indice = carrito.findIndex((producto) => producto.id === id);
    if (indice !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(indice, 1);
      setCarrito(nuevoCarrito);
    }
    setTotal(total - productoPrecio);
    setCountProducts(countProducts - 1);
  };

  return {
    addToCarrito,
    deleteToCarrito,
    carrito,
    total,
    countProducts
  }
};
