import { GET_DATA, GET_USER, GET_WISHLIST } from "./actionTypes";

const initialState = {
  user: null,
  data: [],
  wishlist: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case GET_DATA:
      return {
        ...state,
        data: action.payload,
      };

    case GET_WISHLIST:
      return {
        ...state,
        wishlist: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
