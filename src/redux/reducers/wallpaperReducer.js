const imgInit = [];

export const GET_WALLPAPERS_INFO = "GET_WALLPAPERS_INFO";

const wallpaperReducer = (state = imgInit, action) => {
    switch (action.type) {
        case GET_WALLPAPERS_INFO:
            return action.payload;

        default:
            return state;
    }
};

export default wallpaperReducer;
