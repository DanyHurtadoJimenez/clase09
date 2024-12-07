import {
  AUMENTAR_CONTADOR,
  DISMINUIR_CONTADOR,
} from "./actionContador";

export default function contadorReducer(
  state = {
    contador: 0,
    aumentarClicks: 0,
    disminuirClicks: 0,
  },
  action
) {
  switch (action.type) {
    case AUMENTAR_CONTADOR:
      return {
        ...state, //devuelve lo que tiene el store
        contador: state.contador + 1, //modifica el contador aumentando
        aumentarClicks: state.aumentarClicks + 1,
      };
    case DISMINUIR_CONTADOR:
      return {
        ...state, //obtengho todo el state
        contador: state.contador - 1,
        disminuirClicks: state.disminuirClicks + 1, //esto es para saber cuantas veces clickeamos el boton
      };
    default:
      return state;
  }
}

export const selectActiveContador = state => state.contadorReducer.contador;
