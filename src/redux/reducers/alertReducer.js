const alert = {
    loading: null,
    success: null,
    errors: null,
};

export const ALERT = "ALERT";

const alertReducer = (state = alert, action) => {
    switch (action.type) {
        case ALERT:
            return action.type;
        default:
            return state;
    }
};

export default alertReducer;
