import { SET_ERROR } from "../types";

const initialState = {
  message: "",
  status: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ERROR:
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };
    default:
      return state;
  }
};

export default reducer;
