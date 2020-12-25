import React from "react";
import "./Grid.scss";

const Grid = ({ images }) => {
  return (
    <>
      <div className="grid">
        {images.map((img, i) => (
          <div key={i * 0.5}>
            <div
              className="grid-cell"
              style={{ backgroundImage: `url(${img.url})` }}
            >
              <div className="grid-read-more">
                <button className="grid-cell-button">Read More</button>
              </div>
              <div className="grid-detail">
                <span className="grid-detail-title">Mission Impossible</span>
                <div className="grid-detail-rating">
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  &nbsp;&nbsp;
                  <div className="grid-vote-average">4.5</div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Grid;
