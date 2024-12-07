export const AUMENTAR_CONTADOR = 'AUMENTAR_CONTADOR'
export const DISMINUIR_CONTADOR = 'DISMINUIR_CONTADOR'

//se crean las acciones a ejecutar

export function aumentarContador(valor){
    return{
        type:AUMENTAR_CONTADOR,
        payload: valor
    }
}

export function disminuirContador(valor){
    return{
        type:DISMINUIR_CONTADOR,
        payload: valor
    }
}