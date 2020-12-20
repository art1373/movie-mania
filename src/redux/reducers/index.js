import { combineReducers } from "redux";
import errors from "./errorReducer";
import movies from "./movieReducer";

const rootReducer = combineReducers({
  movies,
  errors,
});

export default rootReducer;
