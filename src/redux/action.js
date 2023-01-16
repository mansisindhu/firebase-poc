import firebase, { database } from "../service/firebase";
import { GET_DATA, GET_USER, GET_WISHLIST } from "./actionTypes";

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
      return {
        ...el.data(),
        docId: el.id,
      };
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

const fetchWishlist = (userId) => async (dispatch) => {
  try {
    const wishlist = (
      await database.collection("wishlists").doc(userId).get()
    ).data();
    dispatch(getWishlist(wishlist));
  } catch (err) {
    dispatch(getWishlist([]));
  }
};

const getWishlist = (data) => {
  return {
    type: GET_WISHLIST,
    payload: data,
  };
};

const addToWishlist = (wishlistDocId, newProductId) => async (dispatch) => {
  try {
    await database
      .collection("wishlists")
      .doc(wishlistDocId)
      .update({
        productIds: firebase.firestore.FieldValue.arrayUnion(newProductId),
      });

    dispatch(fetchWishlist());
  } catch (err) {
    dispatch(fetchWishlist());
  }
};

export { getUser, fetchData, fetchWishlist, addToWishlist };
