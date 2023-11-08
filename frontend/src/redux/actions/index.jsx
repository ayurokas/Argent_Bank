// Action creator pour indiquer qu'un utilisateur est connecté
export const loggedIn = () => {
    return {type: "LOGGED_IN"};
};

// Action creator pour indiquer qu'un utilisateur est déconnecté
export const loggedOut = () => {
    return {type: "LOGGED_OUT"};
};

// Action creator pour récupérer les données de l'utilisateur
export const getUserData = (firstName, lastName) => {
    return {type: "GET_USER_DATA", payload: {firstName, lastName}};
};

// Action creator pour signaler une erreur de connexion
export const loginError = (errorMessage) => {
    return {type: "LOGIN_ERROR", payload: errorMessage};
};