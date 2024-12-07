import React from "react";
import {
  aumentarContador,
  disminuirContador,
} from "../redux/store/contador/actionContador";
import { connect } from "react-redux";
import { selectActiveContador } from "../redux/store/contador/reducerContador";

const FormularioContador = ({
  contador,
  aumentarContador,
  disminuirContador,
}) => {
  const handleAumentar = () => {
    aumentarContador(contador);
  };

  const handleDisminuir = () => {
    disminuirContador(contador);
  };

  return (
    <div>
      <button onClick={handleAumentar}>AUMENTAR CONTADOR</button>
      <br />
      Valor: {contador}
      <br />
      <button onClick={handleDisminuir}>DISMINUIR CONTADOR</button>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    contador: selectActiveContador(state),
  };
};

export default connect(mapStateToProps, {
  aumentarContador,
  disminuirContador,
})(FormularioContador);
