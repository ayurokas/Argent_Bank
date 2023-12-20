// Reducer 'loggedReducer' pour l'état de connexion dans Redux. 
// Gère l'état de connexion avec les actions 'LOGGED_IN' et 'LOGGED_OUT'.

//gere l'eta de connexion de l'user

const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";

const initialState = false;

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: return true; //Met l'état à true (connecté)
    case LOGGED_OUT: return false; // Met l'état à false (déconnecté)
    default: return state;
  };
}
export default loggedReducer;

