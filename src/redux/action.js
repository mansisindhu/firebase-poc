import { GET_USER } from "./actionTypes";

const getUser = (data) => {
  return {
    type: GET_USER,
    payload: data,
  };
};

export { getUser };
