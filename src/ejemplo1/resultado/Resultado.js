import React from "react";
import { selectActiveResultado } from "../../redux/store/Resultado/reducer";
import { connect } from "react-redux";

const Resultado = ({ resultado }) => 
  <div>{resultado}</div>;

  const mapStateToProps = (state) => {
    return {
      //descarga en la variable resultado
      //selecciona el estado actual la cual fue creada en Reducer.js
      resultado: selectActiveResultado(state),
    };
  };

//connect Redux
//se incluye el metodo que recupera el valor del store
//conexion al redux
export default connect(mapStateToProps)(Resultado);
