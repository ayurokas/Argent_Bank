// Reducer pour mettre à jour les informations de profil de l'utilisateur dans l'application.


const UPDATE_PROFILE_DATA = "UPDATE_PROFILE_DATA";

const initialState = {
    firstName: undefined,
    lastName: undefined,
};

const updateProfileReducer = (state = initialState, { type, payload }) => {
    if (type === UPDATE_PROFILE_DATA) {
        return {
            ...state,
            firstName: payload.payload.firstName,
            lastName: payload.payload.lastName,
        };
    };
    return state;
};

export default updateProfileReducer;