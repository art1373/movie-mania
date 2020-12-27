import React from "react";
import { ratingCalc } from "../../../utils/utils";
import "./Rating.scss";
import PropTypes from "prop-types";

const Rating = ({ rating, totalStars, className }) => {
  const [numberOfStars, setnumberOfStars] = React.useState(0);
  const starRef = React.useRef();

  React.useEffect(() => {
    const starsArray = [...Array(totalStars).keys()].map((i) => i + 1);
    setnumberOfStars(starsArray);
    const finalPercentage = ratingCalc(rating);
    starRef.current.style.width = finalPercentage;
  }, [rating, totalStars]);

  return (
    <div className="star-rating">
      <div className={`back-stars ${className}`}>
        {numberOfStars &&
          numberOfStars.map((i) => (
            <React.Fragment key={i * 32.5}>
              <i className="fa fa-star" aria-hidden="true" />
            </React.Fragment>
          ))}
        <div className={`front-stars ${className}`} ref={starRef}>
          {numberOfStars &&
            numberOfStars.map((i) => (
              <React.Fragment key={i * 32.5}>
                <i className="fa fa-star" aria-hidden="true" />
              </React.Fragment>
            ))}
        </div>
      </div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default Rating;
