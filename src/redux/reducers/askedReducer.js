const askedInit = [];

export const GET_ASKED_LISTS = "GET_ASKED_LISTS";

export const askedReducer = (state = askedInit, action) => {
    switch (action.type) {
        case GET_ASKED_LISTS:
            return action.payload;
        default:
            return state;
    }
};

export default askedReducer;
