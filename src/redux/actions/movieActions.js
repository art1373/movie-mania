import {
  LOAD_MORE_RESULTS,
  MOVIE_LIST_SUCCESS,
  SET_ERROR,
  SET_MOVIE_TYPE,
  SET_PAGES,
} from "../types";
import { requestMaker } from "../../services/movieService";

const dispatchMethod = (type, payload, dispatch) => {
  dispatch({ type, payload });
};
const mainMovieRequest = async (type, pageNumber) => {
  const movies = await requestMaker(type, pageNumber);
  const { results, page, total_pages } = movies.data;
  const payload = { page, totalPages: total_pages };

  return { results, payload };
};

export const getMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await mainMovieRequest(type, pageNumber);
    const { results, payload } = response;
    dispatchMethod(MOVIE_LIST_SUCCESS, results, dispatch);
    dispatchMethod(SET_PAGES, payload, dispatch);
  } catch (error) {
    if (error.response) {
      const errorMsg = error?.response?.data?.message;
      dispatchMethod(SET_ERROR, errorMsg);
    }
  }
};

export const loadMoreMovies = (type, pageNumber) => async (dispatch) => {
  try {
    const response = await mainMovieRequest(type, pageNumber);
    const { results, payload } = response;
    dispatchMethod(
      LOAD_MORE_RESULTS,
      { list: results, page: payload.page, totalPages: payload.totalPages },
      dispatch
    );
  } catch (error) {
    if (error.response) {
      const errorMsg = error?.response?.data?.message;
      dispatchMethod(SET_ERROR, errorMsg);
    }
  }
};

// for setting store states manually
export const setResponsePageNumber = (page, totalPages) => async (dispatch) => {
  const payload = { page, totalPages };
  dispatchMethod(SET_PAGES, payload, dispatch);
};

export const setMovieType = (type) => async (dispatch) => {
  dispatchMethod(SET_MOVIE_TYPE, type, dispatch);
};