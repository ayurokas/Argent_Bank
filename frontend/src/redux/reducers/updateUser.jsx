const UPDATE_PROFILE_DATA = "UPDATE_PROFILE_DATA";
// Réducteur pour gérer la mise à jour des données de profil utilisateur

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