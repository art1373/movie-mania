/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import {
  Rating,
  Tabs,
  Media,
  Overview,
  Crew,
  Reviews,
  Spinner,
} from "../../components";
import "./Details.scss";
import { setMovieDetail } from "../../redux/actions/movieActions";
import { useParams } from "react-router-dom";
import { IMAGE_URL } from "../../services/movieService";

function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const movie = useSelector((state) => state.movies.movie);
  const [detail, setDetail] = useState([]);
  const [loading, setloading] = useState(false);

  useEffect(() => {
    setloading(true);
    setTimeout(() => {
      setloading(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (movie.length === 0) {
      dispatch(setMovieDetail(id));
    }
    setDetail(movie[0]);
  }, [id, movie]);

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        detail && (
          <div className="movie-container">
            <div
              className="movie-bg"
              style={{
                backgroundImage: `url(${IMAGE_URL}/${detail?.backdrop_path})`,
              }}
            ></div>
            <div className="movie-overlay"></div>
            <div className="movie-details">
              <div className="movie-image">
                <img src={`${IMAGE_URL}/${detail?.poster_path}`} alt="" />
              </div>
              <div className="movie-body">
                <div className="movie-overview">
                  <div className="title">
                    {detail?.title} <span>{detail?.release_date}</span>
                  </div>
                  <div className="movie-genres">
                    <ul className="genres">
                      {detail.length !== 0 &&
                        detail?.genres.map((genre) => (
                          <li key={genre.id * 2}>{genre.name}</li>
                        ))}
                    </ul>
                  </div>
                  <div className="rating">
                    <Rating
                      className="rating-stars"
                      rating={detail?.vote_average}
                      totalStars={10}
                    />
                    &nbsp;
                    <span>{detail?.vote_average}</span>
                    <p>({detail?.vote_count}) reviews</p>
                  </div>
                  <Tabs>
                    <div label="Overview">
                      <Overview />
                    </div>
                    <div label="Crew">
                      <Crew />
                    </div>
                    <div label="Media">
                      <Media />
                    </div>
                    <div label="Reviews">
                      <Reviews />
                    </div>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </>
  );
}
Details.propTypes = {
  movie: PropTypes.array,
  setMovieDetail: PropTypes.func,
};
export default Details;
