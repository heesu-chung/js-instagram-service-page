import { firestore } from "../../config/firebaseConfig";
import { GET_ASKED_LISTS } from "../reducers/askedReducer";

export const getAskedList = () => async (dispatch) => {
    try {
        let arr = [];
        await firestore
            .collection("asked")
            .get()
            .then((docs) => {
                docs.forEach((doc) => {
                    arr.push(doc.data());
                });
            });
        arr.sort((a, b) => a.dateSort - b.dateSort).reverse();

        dispatch({ type: GET_ASKED_LISTS, payload: arr });
    } catch (err) {}
};
