let userInfo = {};

// action type
export const GET_USER_INFO = "GET_USER_INFO";
export const MATCH_USER_INFO = "MATCH_USER_INFO";

const userReducer = (state = userInfo, action) => {
    switch (action.type) {
        case GET_USER_INFO:
            return action.payload;
        case MATCH_USER_INFO:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
