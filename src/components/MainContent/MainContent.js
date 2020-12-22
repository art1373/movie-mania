import React from "react";
import SlideShow from "../Slider/SlideShow";
import "./MainContent.scss";

function MainContent() {
  const imags = [
    {
      url:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
    { url: "https://www.w3schools.com/css/img_5terre.jpg" },
    {
      url:
        "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg",
    },
  ];
  return (
    <div className="main-content">
      <SlideShow images={imags} />
      <div className="grid-movie-title">
        <div className="movieType">Now Playing</div>
        <div className="paginate">Paginate</div>
      </div>
    </div>
  );
}

export default MainContent;
