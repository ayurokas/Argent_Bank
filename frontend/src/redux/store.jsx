// Cette page configure et crée le store Redux pour gérer l'état global de l'application.

import allReducers from "./reducers";
import { createStore } from "redux";

// Crée le store Redux en utilisant le réducteur racine 'allReducers'

const enhancer = process.env.NODE_ENV === 'development'
  ? window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  : undefined;
const store = createStore(allReducers, enhancer);


export default store;