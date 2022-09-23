import { useState } from "react";
import React from "react";

const Contador = () => {
  const [Contador, setContador] = useState(0);
  console.log(document.getElementById(boton1));
  return (
    <>
      <button id="boton1" class="btn btn-dark">
        Sumar
      </button>
      <h1>{contador}</h1>
      <button id="boton1" class="btn btn-dark">
        Restar
      </button>
    </>
  );
};

export default contador;
