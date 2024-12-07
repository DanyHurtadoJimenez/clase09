//nombrar el metodo del action
//recibe por parametro lo que se quiere modificar
const actualizarResultado = resultado => {
    return{
        //retornamos un objeto con 2 parametros
        type:'ACTUALIZAR_RESULTADO',//identificador en mayuscula y facil de identificar
        payload: resultado//Es el que transmite la informacion al reducer
    }
}

export default actualizarResultado;