import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IMAGE_URL } from "../../services/movieService";
import { Randmoize } from "../../utils/utils";
import { SlideShow, Paginate, Grid } from "../index";
import "./MainContent.scss";
import PropTypes from "prop-types";
import { HEADER_TYPE } from "../../utils/constants";
import {
  getMovies,
  setResponsePageNumber,
} from "../../redux/actions/movieActions";

function MainContent() {
  const dispatch = useDispatch();
  const totalPages = useSelector((state) => state.movies.totalPages);
  const page = useSelector((state) => state.movies.page);
  const list = useSelector((state) => state.movies.list);
  const movieType = useSelector((state) => state.movies.movieType);
  const [images, setimages] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const randomMovies = Randmoize(list);

  useEffect(() => {
    if (randomMovies.length) {
      const IMAGES = [
        { id: 1, url: `${IMAGE_URL}/${randomMovies[0].backdrop_path}` },
        { id: 2, url: `${IMAGE_URL}/${randomMovies[1].backdrop_path}` },
        { id: 3, url: `${IMAGE_URL}/${randomMovies[2].backdrop_path}` },
        { id: 4, url: `${IMAGE_URL}/${randomMovies[3].backdrop_path}` },
        { id: 5, url: `${IMAGE_URL}/${randomMovies[4].backdrop_path}` },
      ];
      setimages(IMAGES);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    setcurrentPage(page);
  }, [page, totalPages]);

  const paginate = (type) => {
    let pageNumber = currentPage;
    if (type === "prev" && currentPage >= 1) {
      pageNumber -= 1;
    } else {
      pageNumber += 1;
    }
    setcurrentPage(pageNumber);
    dispatch(setResponsePageNumber(pageNumber, totalPages));
    dispatch(getMovies(movieType, pageNumber));
  };
  return (
    <div className="main-content">
      <SlideShow images={images} />
      <div className="grid-movie-title">
        <div className="movieType">{HEADER_TYPE[movieType]}</div>
        <div className="paginate">
          <Paginate
            totalPages={totalPages}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid />
    </div>
  );
}

MainContent.propTypes = {
  list: PropTypes.array,
  totalPages: PropTypes.number,
  movieType: PropTypes.string,
  setResponsePageNumber: PropTypes.func,
  getMovies: PropTypes.func,
};

export default MainContent;
