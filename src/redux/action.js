import { database } from "../service/firebase";
import { GET_DATA, GET_USER } from "./actionTypes";

const getUser = (user) => {
  return {
    type: GET_USER,
    payload: user,
  };
};

const fetchData = () => async (dispatch) => {
  try {
    const querySnapshot = (await database.collection("products").get()).docs;
    const data = querySnapshot.map((el) => {
      return el.data();
    });

    dispatch(getData(data));
  } catch (err) {
    dispatch(getData([]));
  }
};

const getData = (data) => {
  return {
    type: GET_DATA,
    payload: data,
  };
};

export { getUser, fetchData };
