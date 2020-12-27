import {
  LOAD_MORE_RESULTS,
  MOVIE_DETAILS,
  CLEAR_MOVIE_DETAIL,
  MOVIE_LIST_SUCCESS,
  SEARCH_QUERY,
  SEARCH_RESULT,
  SET_MOVIE_TYPE,
  SET_PAGES,
} from "../types";

const initialState = {
  list: [],
  page: 1,
  totalPages: 0,
  movieType: "now_playing",
  searchQuery: "",
  searchResult: [],
  movie: [],
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
    case SEARCH_QUERY:
      return { ...state, searchQuery: action.payload };
    case SEARCH_RESULT:
      return { ...state, searchResult: action.payload };
    case MOVIE_DETAILS:
      return { ...state, movie: [...action.payload] };
    case CLEAR_MOVIE_DETAIL:
      return { ...state, movie: action.payload };
    default:
      return state;
  }
};

export default reducer;
