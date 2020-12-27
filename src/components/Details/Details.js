import React from "react";
import PropTypes from "prop-types";
import { Rating, Tabs, Media, Overview, Crew, Reviews } from "../../components";
import "./Details.scss";

function Details({ date = "2021-02-10" }) {
  return (
    <div className="movie-container">
      <div
        className="movie-bg"
        style={{
          backgroundImage: `url(https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile.png)`,
        }}
      ></div>
      <div className="movie-overlay"></div>
      <div className="movie-details">
        <div className="movie-image">
          <img
            src={`https://www.geeklawblog.com/wp-content/uploads/sites/528/2018/12/liprofile.png`}
            alt=""
          />
        </div>
        <div className="movie-body">
          <div className="movie-overview">
            <div className="title">
              <span></span>
            </div>
            <div className="movie-genres">
              <ul className="genres">
                <li>Comedy</li>
                <li>Action</li>
                <li>Sci-fi</li>
              </ul>
            </div>
            <div className="rating">
              <Rating className="rating-stars" rating={6.5} totalStars={10} />
              &nbsp;
              <span>6.5</span> <p>200 reviews</p>
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
  );
}
Details.propTypes = {
  date: PropTypes.string,
};
export default Details;