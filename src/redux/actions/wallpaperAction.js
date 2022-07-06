import { firestore } from "../../config/firebaseConfig";
import { GET_WALLPAPERS_INFO } from "../reducers/wallpaperReducer";

export const getWallpaperInfo = (file) => async (dispatch) => {
    try {
        let arr = [];

        await firestore
            .collection(`${file}`)
            .get()
            .then((docs) => {
                docs.forEach((doc) => {
                    arr.push({ ...doc.data(), id: doc.id });
                });
            });
        dispatch({ type: GET_WALLPAPERS_INFO, payload: arr });
    } catch (err) {}
};

export const updateWallpaperViewInfo =
    (wallpaper, file, id, num, ip) => async (dispatch) => {
        try {
            const ipArr = [...wallpaper];
            if (ipArr.indexOf(ip) === -1) ipArr.push(ip);

            await firestore.collection(`${file}`).doc(`${id}`).update({
                view: ipArr.length,
                ipArr: ipArr,
            });
        } catch (err) {}
    };
