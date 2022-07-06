const imgInit = [];

export const GET_IMAGES_INFO = "GET_IMAGES_INFO";

const imgReducer = (state = imgInit, action) => {
    switch (action.type) {
        case GET_IMAGES_INFO:
            return action.payload;
        default:
            return state;
    }
};

export default imgReducer;
