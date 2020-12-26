/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Main.scss";
import MainContent from "../MainContent/MainContent";
import PropTypes from "prop-types";
import { Spinner } from "../../components";
import { useSelector, useDispatch } from "react-redux";
import {
  loadMoreMovies,
  setResponsePageNumber,
} from "../../redux/actions/movieActions";

function Main() {
  const dispatch = useDispatch();
  const page = useSelector((state) => state.movies.page);
  const movieType = useSelector((state) => state.movies.movieType);
  const totalPages = useSelector((state) => state.movies.totalPages);
  const [loading, setloading] = React.useState(false);
  const [currentPage, setCurrentPage] = React.useState(page);
  const mainRef = React.useRef();
  const bottomLineRef = React.useRef();

  React.useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 3000);
  }, []);

  React.useEffect(() => {
    dispatch(setResponsePageNumber(currentPage, totalPages));
  }, [currentPage, totalPages]);

  const initFetchMore = () => {
    let pageNumber = currentPage;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      dispatch(loadMoreMovies(movieType, currentPage));
    }
  };

  function handleScroll() {
    const containerHeight = mainRef.current.getBoundingClientRect().height;
    const {
      top: bottomLineTop,
    } = bottomLineRef.current.getBoundingClientRect();

    if (bottomLineTop <= containerHeight) {
      initFetchMore();
    }
  }

  return (
    <div ref={mainRef} className="main" onScroll={() => handleScroll()}>
      {loading ? <Spinner /> : <MainContent />}
      <div ref={bottomLineRef}></div>
    </div>
  );
}

Main.propTypes = {
  page: PropTypes.number,
  movieType: PropTypes.string,
  totalPages: PropTypes.number,
  loadMoreMovies: PropTypes.func,
  setResponsePageNumber: PropTypes.func,
};

export default Main;
