import React from "react";
import { useState } from "react";


const Cart = ({ pizzas }) => {
  const [carrito, setCarrito] = useState([]);
  let total = carrito.reduce(
    (acumulador, pizza) => (acumulador += pizza.count),
    0
  );

  let total_price = carrito.reduce(
    (acumulador, pizza) => (acumulador += pizza.price * pizza.count),
    0
  );
  let formatted_total = total_price.toLocaleString('es-CL', { style: 'currency', currency: 'CLP'});

  const agregar = (pizza) => {
    let coincidencia = carrito.findIndex((item) => item.id === pizza.id);

    let nuevo_producto = {
      id: pizza.id,
      name: pizza.name,
      img: pizza.img,
      price: pizza.price,
      count: 1,
    };

    if (coincidencia >= 0) {
      carrito[coincidencia].count++;

      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, nuevo_producto]);
    }
  };

  const eliminar = (pizza) => {
    let coincidencia = carrito.findIndex((item) => item.id === pizza.id);

    if (coincidencia >= 0) {
      if (carrito[coincidencia].count > 1) {
        carrito[coincidencia].count--;

        setCarrito([...carrito]);
      } else {
        carrito.splice(coincidencia, 1);

        setCarrito([...carrito]);
      }
    }
  };

  return (
    <div>
 
      <div className="p3 container">
      <div className="d-flex justify-content-between align-items-center m-4">
        <div>
        <h2 className="text-center fs-2 fw-bold py-2">Detalles del pedido</h2>

        </div>
        <div className="bg-secondary-subtle p-3 rounded">
        <h4 className="">Cantidad de productos: <span className="fw-bold">{total}</span></h4>
        <h4 className="">Precio Total: <span className="fw-bold"> {formatted_total}</span></h4>

        </div>
      </div>
        {pizzas.map((pizza) => (
          <div className="row justify-content-center m-3" key={pizza.id}>
            <div className="col-4">
              <img src={pizza.img} className="img-fluid" alt="" />
             
            </div>
            <div className="col-8" >
            <h4>{pizza.name}</h4>
              <p>{pizza.desc}</p>
              <p className="fs-5">$ {pizza.price}</p>
              <div className="d-flex">
                <span>{pizza.count}</span>
                <button
                className="btn btn-success m-2"
                onClick={() => agregar(pizza)}
              >
                +
              </button>
              <button
                className="btn btn-danger m-2"
                onClick={() => eliminar(pizza)}
              >
                -
              </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
