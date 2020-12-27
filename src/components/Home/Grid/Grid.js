import React from "react";
import { Rating, LazyImage } from "../../../components";
import "./Grid.scss";
import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { IMAGE_URL } from ".././../../services/movieService";
import { Link } from "react-router-dom";
import { formatMovieTitle } from "../../../utils/utils";

const Grid = () => {
  const list = useSelector((state) => state.movies.list);
  const [moviedata, setMovieData] = React.useState([]);

  React.useEffect(() => {
    setMovieData(list);
  }, [list]);
  return (
    <>
      <div className="grid">
        {moviedata.map((data) => (
          <div key={uuidV4()} className={data?.poster_path ? "" : "hide-me"}>
            <LazyImage
              className="grid-cell"
              src={`${IMAGE_URL}${data?.poster_path}`}
              alt={"placeholder"}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">
                  <Link
                    to={`/${data.id}/${formatMovieTitle(data.title)}/details`}
                  >
                    Read More
                  </Link>
                </button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">{data?.title}</span>
                <div className="grid-detail-rating">
                  <Rating rating={data?.vote_average} totalStars={10} />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">{data?.vote_average}</div>
                </div>
              </div>
            </LazyImage>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
