import React from "react";
import "./Paginate.scss";
import PropTypes from "prop-types";

const Paginate = (props) => {
  const { totalPages, currentPage, paginate } = props;
  return (
    <>
      <span className="pageCount">
        {currentPage} - {totalPages}
      </span>
      <button
        onClick={() => paginate("prev")}
        className={`paginate-button ${currentPage <= 1 && "disable"}`}
      >
        Prev
      </button>
      <button
        onClick={() => paginate("next")}
        className={`paginate-button ${currentPage >= totalPages && "disable"}`}
      >
        Next
      </button>
    </>
  );
};

Paginate.propTypes = {
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func.isRequired,
};
export default Paginate;
