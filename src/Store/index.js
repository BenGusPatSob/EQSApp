import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "../Reducers";
import initialState from "../Store/initialState";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION || compose;
const forbiddenWords = ["spam", "money"];
const forbiddenWordsMiddleWare = ({dispatch}) => next => action => {
    //logica de que cheque el action.payload en función del action.type
    //Si no pasa devuelve la accion con un type de rechazo y sin payload
    //Si pasa, modifica el action.type y bypasa la action.payload
    return next(action);
};

const persistConfig = {
  key: "root",
  storage,
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const configureStore = () =>
  createStore(
    persistedReducer,
    initialState,
    
  );

