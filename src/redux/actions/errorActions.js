import { SET_ERROR } from "../types";

export const setError = (errorMsg) => async (dispatch) => {
  if (errorMsg) {
    const payload = { message: errorMsg.message, status: errorMsg.status };
    dispatch({ type: SET_ERROR, payload });
  } else {
    const payload = { message: "", status: null };
    dispatch({ type: SET_ERROR, payload });
  }
};
