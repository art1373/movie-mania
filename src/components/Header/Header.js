/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState } from "react";
import cinemaLogo from "../../assets/cinema.svg";
import PropTypes from "prop-types";
import { getMovies } from "../../redux/actions/movieActions";
import { useDispatch } from "react-redux";
import { HEADER_LIST } from "../../utils/constants";
import "./Header.scss";

const Header = () => {
  let [navClass, setnNavClass] = useState(false);
  let [menuClass, setMenuClass] = useState(false);
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getMovies("now_playing", 1));
  }, []);

  const toggleMenu = () => {
    setnNavClass(!navClass);
    setMenuClass(!menuClass);
    if (navClass) {
      document.body.classList.add("header-nav-open");
    } else {
      document.body.classList.remove("header-nav-open");
    }
  };

  return (
    <>
      <div className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            <img className="logo" src={cinemaLogo} alt="movie-mania-logo" />
          </div>
          <div
            className={`${
              menuClass ? "header-menu-toggle is-active" : "header-menu-toggle"
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
              <li key={h.id} className="header-nav-item">
                <span className="header-list-name">
                  <i className={h.iconClass} />
                </span>
                &nbsp;
                <span className="header-list-name">{h.name}</span>
              </li>
            ))}
            <input
              className="search-input"
              type="text"
              placeholder="Search for Movies"
            />
          </ul>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  getMovies: PropTypes.func,
};

export default Header;
