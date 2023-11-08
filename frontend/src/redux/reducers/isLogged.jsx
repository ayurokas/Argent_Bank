const LOGGED_IN = "LOGGED_IN";
const LOGGED_OUT = "LOGGED_OUT";

// Réducteur pour gérer l'état de connexion d'un utilisateur (true pour connecté, false pour déconnecté)


const initialState = false;

const loggedReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGGED_IN: return true;
    case LOGGED_OUT: return false;
    default: return state;
  };
}
export default loggedReducer;

