//inicializar el estado
//es vacio porque estamos inicializando la aplicacion
const initialState = { resultado: "" };

export default (state = initialState, action) => {
  //validar el tipo de accion
  switch (action.type) {
    case "ACTUALIZAR_RESULTADO":
      return {
        //retorne todo lo que habia en el store
        ...state,
        resultado: action.payload + " - Modificado",
      };
    default: //sino se modifica devuelva lo que tiene actualmente el estado
      return state;
  }
}

//se exporta esta opcion para devolver el valor de 'resultado' del state

export const selectActiveResultado = state => state.resultadoReducer.resultado
