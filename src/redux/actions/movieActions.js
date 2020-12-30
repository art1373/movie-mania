import {
  LOAD_MORE_RESULTS,
  MOVIE_LIST_SUCCESS,
  SEARCH_QUERY,
  SEARCH_RESULT,
  SET_ERROR,
  SET_MOVIE_TYPE,
  SET_PAGES,
  CLEAR_MOVIE_DETAIL,
  MOVIE_DETAILS,
} from "../types";
import {
  requestMaker,
  movieQueryApi,
  movieCreditGetter,
  movieDetailGetter,
  movieImageGetter,
  movieVideosGetter,
  moviewReviewsGetter,
} from "./../../services/movieService";

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
    if (error) {
      const payload = {
        message: error?.message,
        status: error?.response?.status,
      };

      dispatchMethod(SET_ERROR, payload);
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
      const payload = {
        message:
          error?.response?.data?.message ||
          error?.response?.data?.status_message,
        status: error?.response?.status,
      };

      dispatchMethod(SET_ERROR, payload);
    }
  }
};

export const searchMovieResult = (query) => async (dispatch) => {
  try {
    if (query) {
      const response = await movieQueryApi(query);
      const { results } = response?.data;
      dispatchMethod(SEARCH_RESULT, results, dispatch);
    } else {
      dispatchMethod(SEARCH_RESULT, [], dispatch);
    }
  } catch (error) {
    if (error.response) {
      const payload = {
        message:
          error?.response?.data?.message ||
          error?.response?.data?.status_message,
        status: error?.response?.status,
      };

      dispatchMethod(SET_ERROR, payload);
    }
  }
};

export const setMovieDetail = (id) => async (dispatch) => {
  try {
    const details = await movieDetailGetter(id);
    const credits = await movieCreditGetter(id);
    const images = await movieImageGetter(id);
    const videos = await movieVideosGetter(id);
    const reviews = await moviewReviewsGetter(id);
    const resp = await Promise.all([details, credits, images, videos, reviews])
      .then((values) => Promise.all(values.map((value) => value.data)))
      .then((response) => {
        return response;
      });
    dispatchMethod(MOVIE_DETAILS, resp, dispatch);
  } catch (error) {
    if (error.response) {
      const payload = {
        message:
          error?.response?.data?.message ||
          error?.response?.data?.status_message,
        status: error?.response?.status,
      };

      dispatchMethod(SET_ERROR, payload);
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

export const setSearchQuery = (query) => async (dispatch) => {
  dispatchMethod(SEARCH_QUERY, query, dispatch);
};

export const clearMovieDetail = () => async (dispatch) => {
  dispatchMethod(CLEAR_MOVIE_DETAIL, [], dispatch);
};
