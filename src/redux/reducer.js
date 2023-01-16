import { GET_USER } from "./actionTypes";

const initialState = {
  user: null,
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
