/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import cinemaLogo from "../../../assets/cinema.svg";
import PropTypes from "prop-types";
import {
  getMovies,
  setMovieType,
  setResponsePageNumber,
  setSearchQuery,
  searchMovieResult,
  clearMovieDetail,
} from "../../../redux/actions/movieActions";
import { useHistory, useLocation, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { HEADER_LIST } from "../../../utils/constants";
import "./Header.scss";

const Header = () => {
  let [navClass, setnNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  let [disableSearch, setDisableSearch] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [search, setsearch] = useState("");
  let [type, setType] = useState("now_playing");
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movies.page);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const history = useHistory();
  const location = useLocation();
  const detailsRoute = useRouteMatch("/:id/:name/details");

  React.useEffect(() => {
    dispatch(getMovies(type, page));
    dispatch(setResponsePageNumber(page, totalPages));

    if (detailsRoute || location.pathname === "/") {
      setHideHeader(true);
    }
  }, [type, disableSearch, location]);

  const setMovieTypeUrl = (type) => {
    setDisableSearch(false);
    if (location.pathname !== "/") {
      dispatch(clearMovieDetail());
      history.push("/");
      setType(type);
      dispatch(setMovieType(type));
    } else {
      setType(type);
      dispatch(setMovieType(type));
    }
  };

  const toggleMenu = () => {
    setnNavClass(!navClass);
    setMenuClass(!menuClass);
    if (navClass) {
      document.body.classList.add("header-nav-open");
    } else {
      document.body.classList.remove("header-nav-open");
    }
  };

  function handleChange(value) {
    setsearch(value);
    dispatch(setSearchQuery(value));
    dispatch(searchMovieResult(value));
  }
  function navigateBack() {
    setDisableSearch(false);
    dispatch(clearMovieDetail());
    history.push("/");
  }

  return (
    <>
      {hideHeader && (
        <div className="header-nav-wrapper">
          <div className="header-bar"></div>
          <div className="header-navbar">
            <div className="header-image" onClick={navigateBack}>
              <img className="logo" src={cinemaLogo} alt="movie-mania-logo" />
            </div>
            <div
              className={`${
                menuClass
                  ? "header-menu-toggle is-active"
                  : "header-menu-toggle"
              }`}
              id="header-mobile-menu"
              onClick={toggleMenu}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
            <ul
              className={`${
                navClass ? "header-nav header-mobile-nav" : "header-nav"
              }`}
            >
              {HEADER_LIST.map((h) => (
                <li
                  key={h.id}
                  className={
                    h.type === type
                      ? "header-nav-item active-item"
                      : "header-nav-item"
                  }
                  onClick={() => setMovieTypeUrl(h.type)}
                >
                  <span className="header-list-name">
                    <i className={h.iconClass} />
                  </span>
                  &nbsp;
                  <span className="header-list-name">{h.name}</span>
                </li>
              ))}
              <input
                value={search}
                className={`search-input ${disableSearch ? "disabled" : ""}`}
                type="text"
                placeholder="Search for Movies"
                onChange={(e) => handleChange(e.target.value)}
              />
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

Header.propTypes = {
  getMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
  setMovieType: PropTypes.func,
  clearMovieDetail: PropTypes.func,
  page: PropTypes.number,
  totalPages: PropTypes.number,
};

export default Header;
