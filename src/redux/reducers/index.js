import { combineReducers } from "redux";
import user from "./userReducer";
import wallpaper from "./wallpaperReducer";
import asked from "./askedReducer";
import img from "./imgReducer";
import auth from "./authReducer";
const rootReducer = combineReducers({
    user,
    img,
    wallpaper,
    asked,
    auth,
});

export default rootReducer;
