import Axios from "axios";

const MAIN_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.API_SECRET;

export const requestMaker = async (type, page) => {
  try {
    const response = await Axios.get(
      `${MAIN_URL}/movie/${type}?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const movieQueryApi = async (query) => {
  try {
    const response = await Axios.get(
      `${MAIN_URL}/search/movie?api_key=${API_KEY}&language=en-US&query=${query}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const movieDetailGetter = async (id) => {
  try {
    const response = await Axios.get(
      `${MAIN_URL}/movie/${id}?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const movieCreditGetter = async (id) => {
  try {
    const response = await Axios.get(
      `${MAIN_URL}/movie/${id}/credits?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const movieImageGetter = async (id) => {
  try {
    const response = await Axios.get(
      `${MAIN_URL}/movie/${id}/images?api_key=${API_KEY}&language=en-US&include_image_language=en`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const movieVideosGetter = async (id) => {
  try {
    const response = await Axios.get(
      `${MAIN_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const moviewReviewsGetter = async (id, page = 1) => {
  try {
    const response = await Axios.get(
      `${MAIN_URL}/movie/${id}/reviews?api_key=${API_KEY}&language=en-US&page=${page}`
    );
    return response;
  } catch (error) {
    console.log(error);
  }
};
