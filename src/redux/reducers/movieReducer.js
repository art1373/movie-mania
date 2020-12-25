import { MOVIE_LIST_SUCCESS, SET_PAGES } from "../types";

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case MOVIE_LIST_SUCCESS:
      return { ...state, list: action.payload };
    case SET_PAGES:
      return {
        ...state,
        page: action?.payload?.page,
        totalPages: action?.payload?.totalPages,
      };
    default:
      return state;
  }
};

export default reducer;
