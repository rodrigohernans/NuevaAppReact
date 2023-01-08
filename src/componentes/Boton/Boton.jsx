import "./Boton.css";

import React from "react";

const Boton = ({ texto, type, accion }) => {
  return (
    <div>
      <button className={type} onClick={accion}>
        {texto}
      </button>
    </div>
  );
};

export default Boton;
