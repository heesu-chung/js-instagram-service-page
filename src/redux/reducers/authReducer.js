const init = {
    id: null,
    password: null,
    tier: null,
};

export const GET_AUTH_INFO = "GET_AUTH_INFO";

const authReducer = (state = init, action) => {
    switch (action.type) {
        case GET_AUTH_INFO:
            return action.payload;
        default:
            return state;
    }
};

export default authReducer;
