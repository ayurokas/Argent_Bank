//combine plusieurs réducteurs en un seul réducteur racine pour gérer l'état global de votre application à l'aide de Redux.

import { combineReducers } from "redux";
import loggedReducer from "./isLogged";
import getUserReducer from "./getUser";

const allReducers = combineReducers({
    loggedReducer,
    getUserReducer
});
export default allReducers;
