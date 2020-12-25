import Axios from "axios";

const MAIN_URL = "https://api.themoviedb.org/3";
export const IMAGE_URL = "https://image.tmdb.org/t/p/original";
const API_KEY = process.env.REACT_APP_API_SECRET;

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
