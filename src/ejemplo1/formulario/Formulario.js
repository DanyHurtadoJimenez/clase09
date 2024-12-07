import React, { useRef } from "react";
import actualizarResultado from "../../redux/store/Resultado/action";
import { connect } from "react-redux";

//siempre al iniciar lo que debemos hacer es recibir por parametro las acciones
const Formulario = ({ actualizarResultado }) => {
  const resultadoRef = useRef(null); //asignamos la referencia

  const onButtonClick = () => {
    actualizarResultado(resultadoRef.current.value);
  };

  return (
    <div>
      Campo:
      <input type="text" ref={resultadoRef}></input>
      <button onClick={onButtonClick}>Guardar en el store</button>
    </div>
  );
};

//se conecta con Redux con valor null = indica si desea recuperar algo del store
export default connect(null,{actualizarResultado})(Formulario)
