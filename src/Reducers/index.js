import { combineReducers } from 'redux';
import c from '../Actions/Constants';

export const isDrawing = (state = {}, action) => {
    const {type, payload} = action;
    
    switch (type){
        case c.ADD_POINT:
            const {payload: punto} = payload;
            const nuevoEstado = { ...state };
            nuevoEstado.Seccion.Entidades.Puntos = [...nuevoEstado.Seccion.Entidades.Puntos, punto];
        default:
            return state;
    }
}

const reducers = combineReducers({ isDrawing });

export default reducers;
