import React, { useEffect, useState } from "react";
import iconPizza from "../assets/img/icon-pizza.png";
import iconEyes from "../assets/img/icon-eyes.png";
import iconCart from "../assets/img/icon-cart.png";

const Pizza = () => {
  // Definicion de variables
  const [pizza, setPizza] = useState([]);
  const [ingredientes, setIngredientes] = useState([]);
  const [precio, setPrecio] = useState([]);
  const formattedPrecio = precio.toLocaleString("es-CL", {
    style: "currency",
    currency: "CLP",
  });

  //Definicion de funciones
  const getPizza = async () => {
    const res = await fetch("http://localhost:5000/api/pizzas/p001");
    const data = await res.json();
    setPizza(data);
    setIngredientes(data.ingredients);
    setPrecio(data.price);
  };

  useEffect(() => {
    getPizza();
  }, []);

  return (
    <>
      <div className="album py-5 ">
        <div className="container">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div key={pizza.id} className="col">
              <div className="card shadow-sm rounded-3">
                <img src={pizza.img} alt="" />
                <div className="card-body">
                  <h3>Pizza {pizza.name}</h3>
                  <hr className="border-bottom border-1 border-dark"></hr>
                  <p className="">{pizza.desc}</p>
                  <hr className="border-bottom border-1 border-dark"></hr>

                  <p className="text-center">
                    {" "}
                    <img
                      src={iconPizza}
                      alt="icon-pizza"
                      width="30"
                      height="24"
                    />
                     Ingredientes:
                  </p>
                  <p className="text-center">{ingredientes.join(", ")}</p>

                  <hr className="border-bottom border-1 border-dark"></hr>
                  <p className="text-center fs-4 fw-medium">
                    Precio {formattedPrecio}
                  </p>
                  <div className="d-flex justify-content-between ">
                    <button
                      type="button"
                      className="btn btn-sm btn-outline-secondary"
                    >
                      Ver Más
                      <img
                        src={iconEyes}
                        alt="icon-eyes"
                        width="30"
                        height="24"
                      />
                    </button>
                    <button
                      type="button"
                      className="btn btn-sm btn-dark btn-outline-primary text-white"
                    >
                      Añadir{" "}
                      <img
                        src={iconCart}
                        alt="icon cart"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Pizza;
