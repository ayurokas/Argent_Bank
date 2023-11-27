// Ce fichier définit un reducer Redux pour gérer les données de l'utilisateur. 
// Le reducer écoute les actions de type 'GET_USER_DATA' et met à jour l'état avec les nouvelles données de l'utilisateur.

const GET_USER_DATA = "GET_USER_DATA";

const initialState = {
    firstName: undefined,
    lastName: undefined,
  };
  
// Reducer pour gérer les données de l'utilisateur
  const getUserReducer = (state = initialState, { type, payload }) => {
    if (type === GET_USER_DATA) {
      return {
        ...state,
        firstName: payload.firstName,
        lastName: payload.lastName,
      };
    }
    return state;
  };

  export default getUserReducer;
  