import React from "react";
import { Rating, LazyImage } from "../../components";
import "../Grid/Grid.scss";
import "./Search.scss";
import { useSelector } from "react-redux";
import { v4 as uuidV4 } from "uuid";
import { IMAGE_URL } from "../../services/movieService";
import PropTypes from "prop-types";

const SearchResults = () => {
  const searchResults = useSelector((state) => state.movies.searchResult);
  const searchQuery = useSelector((state) => state.movies.searchQuery);
  const [moviedata, setMovieData] = React.useState([]);

  React.useEffect(() => {
    setMovieData(searchResults);
  }, [searchResults]);
  return (
    <div className="searchKeyword">
      <div className="grid-search-title">
        <span className="grid-text1">Your search keyword:</span>{" "}
        <span className="grid-text2">{searchQuery}</span>
      </div>
      <div className="grid">
        {moviedata.length !== 0 &&
          moviedata.map((data) => (
            <div key={uuidV4()} className={data?.poster_path ? "" : "hide-me"}>
              <LazyImage
                className="grid-cell"
                src={`${IMAGE_URL}${data?.poster_path}`}
                alt={"placeholder"}
              >
                <div className="grid-read-more">
                  <button className="grid-cell-button">Read More</button>
                </div>
                <div className="grid-detail">
                  <span className="grid-detail-title">{data?.title}</span>
                  <div className="grid-detail-rating">
                    <Rating rating={data?.vote_average} totalStars={10} />
                    &nbsp;&nbsp;
                    <div className="grid-vote-average">
                      {data?.vote_average}
                    </div>
                  </div>
                </div>
              </LazyImage>
            </div>
          ))}
      </div>
    </div>
  );
};

SearchResults.propTypes = {
  searchResult: PropTypes.array,
  searchQuery: PropTypes.string,
};

export default SearchResults;
