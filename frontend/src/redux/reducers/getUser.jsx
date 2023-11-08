const GET_USER_DATA = "GET_USER_DATA";
//Ce réducteur gère les données de l'utilisateur, mettant à jour l'état lorsque l'action 'GET_USER_DATA' est déclenchée, tout en conservant l'état actuel pour les autres actions.

const initialState = {
    firstName: undefined,
    lastName: undefined,
  };
  

  // Réducteur pour gérer les actions liées à la récupération des données de l'utilisateur
  const getUserReducer = (state = initialState, { type, payload }) => {
    if (type === GET_USER_DATA) {
      return {
        ...state,// Copie l'état actuel
        firstName: payload.firstName, // Met à jour le prénom avec les données de l'action
        lastName: payload.lastName,   // Met à jour le nom de famille avec les données de l'action
      };
    }
    // Si l'action n'est pas de type "GET_USER_DATA", renvoie simplement l'état actuel
    return state;
  };

  export default getUserReducer;
  