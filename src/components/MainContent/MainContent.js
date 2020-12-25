import React, { useState } from "react";
import { SlideShow, Paginate, Grid } from "../index";
import "./MainContent.scss";

function MainContent() {
  const imags = [
    {
      rating: 5.5,
      url:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    { rating: 6, url: "https://www.w3schools.com/css/img_5terre.jpg" },
    {
      rating: 10,
      url:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    {
      rating: 7.5,
      url:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    { rating: 8.2, url: "https://www.w3schools.com/css/img_5terre.jpg" },
  ];
  const [currentPage, setcurrentPage] = useState(1);
  const paginate = (type) => {
    if (type === "prev" && currentPage >= 1) {
      setcurrentPage((prev) => prev - 1);
    } else {
      setcurrentPage((prev) => prev + 1);
    }
  };
  return (
    <div className="main-content">
      <SlideShow images={imags} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">
          <Paginate
            totalPages={10}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      </div>
      <Grid images={imags} />
    </div>
  );
}

export default MainContent;
