import { firestore } from "../../config/firebaseConfig";
import { GET_IMAGES_INFO } from "../reducers/imgReducer";

export const getImgInfo = (file) => async (dispatch) => {
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
        dispatch({ type: GET_IMAGES_INFO, payload: arr });
    } catch (err) {}
};

export const updateImgViewInfo =
    (archive, file, id, num, ip) => async (dispatch) => {
        try {
            const ipArr = [...archive];
            if (ipArr.indexOf(ip) === -1) ipArr.push(ip);

            await firestore.collection(`${file}`).doc(`${id}`).update({
                view: ipArr.length,
                ipArr: ipArr,
            });
        } catch (err) {}
    };
