import { MOVIE_LIST_SUCCESS, SET_ERROR, SET_PAGES } from "../types";
import { requestMaker } from "../../services/movieService";

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const movies = await requestMaker(type, pageNumber);
    const { results, page, total_pages } = movies.data;
    const payload = { page, totalPages: total_pages };
    dispatchMethod(MOVIE_LIST_SUCCESS, results, dispatch);
    dispatchMethod(SET_PAGES, payload, dispatch);
  } catch (error) {
    if (error.response) {
      const errorMsg = error?.response?.data?.message;
      dispatchMethod(SET_ERROR, errorMsg);
    }
  }
};
