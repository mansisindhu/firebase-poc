const initialState = {
  user: {},
  data: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ANY":
      return state;

    default:
      return state;
  }
};

export default rootReducer;
