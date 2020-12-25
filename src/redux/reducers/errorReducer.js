import { SET_ERROR } from "../types";

const initialState = "";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
