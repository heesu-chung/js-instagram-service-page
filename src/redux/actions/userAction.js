import { firestore } from "../../config/firebaseConfig";
import { GET_USER_INFO } from "../reducers/userReducer";
import axios from "axios";

export const getUserInfo = () => async (dispatch) => {
    try {
        const res = await axios.get(`http://geolocation-db.com/json/`);

        let userIPArr = [];
        await firestore
            .collection("user")
            .get()
            .then(async (docs) => {
                docs.forEach((doc) => {
                    userIPArr.push(doc.data().ip);
                });
            });
        userIPArr.indexOf(res.data.IPv4) >= 0
            ? (userIPArr = [])
            : await firestore.collection("user").add({
                  ip: res.data.IPv4,
                  city: res.data.city,
                  state: res.data.state,
                  latitude: res.data.latitude,
                  longitude: res.data.longitude,
                  likes: [],
                  log: [],
                  feed: [],
              });
        dispatch({
            type: GET_USER_INFO,
            payload: {
                ip: res.data.IPv4,
                city: res.data.city,
                state: res.data.state,
                country_name: res.data.country_name,
                latitude: res.data.latitude,
                longitude: res.data.longitude,
            },
        });
    } catch (err) {}
};
