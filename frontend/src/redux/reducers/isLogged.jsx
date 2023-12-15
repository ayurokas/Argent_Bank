// Reducer 'loggedReducer' pour l'état de connexion dans Redux. 
// Gère l'état de connexion avec les actions 'LOGGED_IN' et 'LOGGED_OUT'.

const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";

const initialState = false;

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: return true;
    case LOGGED_OUT: return false;
    default: return state;
  };
}
export default loggedReducer;

