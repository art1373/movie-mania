import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { IMAGE_URL } from "../../services/movieService";
import { Randmoize } from "../../utils/utils";
import { SlideShow, Paginate, Grid } from "../index";
import "./MainContent.scss";

function MainContent() {
  const totalPages = useSelector((state) => state.movies.totalPages);
  const list = useSelector((state) => state.movies.list);
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

  const paginate = (type) => {
    if (type === "prev" && currentPage >= 1) {
      setcurrentPage((prev) => prev - 1);
    } else {
      setcurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="main-content">
      <SlideShow images={images} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
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

export default MainContent;
