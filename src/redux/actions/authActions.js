import { firestore } from "../../config/firebaseConfig";
import { GET_AUTH_INFO } from "../reducers/authReducer";

export const getAuthInfo = (id, pw) => async (dispatch) => {
    try {
        let arr = [];
        await firestore
            .collection("auth")
            .get()
            .then((docs) => {
                docs.forEach((doc) => {
                    if (doc.data().id === id && doc.data().pw === pw) {
                        dispatch({
                            type: GET_AUTH_INFO,
                            payload: {
                                id: doc.data().id,
                                tier: doc.data().tier,
                            },
                        });
                    }
                });
            });
    } catch (err) {}
};
