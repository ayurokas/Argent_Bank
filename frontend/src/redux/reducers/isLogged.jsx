// Reducer 'loggedReducer' pour l'état de connexion dans Redux. 
// Gère l'état de connexion avec les actions 'LOGGED_IN' et 'LOGGED_OUT'.

const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";

const initialState = false;

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: 
    return true; // Si l'action est LOGGED_IN, retourner `true` pour indiquer que l'utilisateur est connecté
    case LOGGED_OUT: 
    return false;// Si l'action est LOGGED_OUT, retourner `false` pour indiquer que l'utilisateur est déconnecté
    default: return state;
  };
}
export default loggedReducer;

