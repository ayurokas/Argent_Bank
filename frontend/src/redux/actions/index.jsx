// Ce fichier définit des actions Redux pour gérer l'état de l'authentification de l'utilisateur et récupérer les données de l'utilisateur. 


export const loggedIn = () => {
    return {type: "LOGGED_IN"};
};

export const loggedOut = () => {
    return {type: "LOGGED_OUT"};
};

export const getUserData = (firstName, lastName) => {
    return {type: "GET_USER_DATA", payload: {firstName, lastName}};
};

export const loginError = (errorMessage) => {
    return {type: "LOGIN_ERROR", payload: errorMessage};
};