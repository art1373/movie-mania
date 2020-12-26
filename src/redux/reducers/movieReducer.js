import {
  LOAD_MORE_RESULTS,
  MOVIE_LIST_SUCCESS,
  SET_MOVIE_TYPE,
  SET_PAGES,
} from "../types";

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  movieType: "now_playing",
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
    case LOAD_MORE_RESULTS:
      return {
        ...state,
        list: [...state.list, ...action.payload?.list],
        page: action?.payload?.page,
        totalPages: action?.payload?.totalPages,
      };

    case SET_MOVIE_TYPE:
      return { ...state, movieType: action.payload };
    default:
      return state;
  }
};

export default reducer;
