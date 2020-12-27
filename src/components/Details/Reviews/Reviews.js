import React, { useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { v4 as uuidv4 } from "uuid";

import "./Reviews.scss";

const Reviews = (props) => {
  const movie = useSelector((state) => state.movies.movie);
  const [reviews] = useState(movie[4]);

  return (
    <>
      <div className="movie-reviews">
        <div className="div-title">
          Reviews {reviews.results.length > 0 ? reviews.results.length : ""}
        </div>
        {reviews.results.length ? (
          reviews.results.map((data) => (
            <div className="reviews" key={uuidv4()}>
              <h3>{data.author}</h3>
              <div>{data.content}</div>
            </div>
          ))
        ) : (
          <p>No reviews to show</p>
        )}
      </div>
    </>
  );
};

Reviews.propTypes = {
  movie: PropTypes.array,
};

export default Reviews;
