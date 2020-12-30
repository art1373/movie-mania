import React from "react";
import "./NotFound.scss";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
import { setError } from "../../../redux/actions/errorActions";

const NotFound = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const navigateToHomePage = () => {
    dispatch(setError({ message: "", statusCode: null }));

    history.push("/");
  };

  return (
    <div className="error-page">
      <h1 className="error-header">Hey There!</h1>
      <p className="error-msg">Something went wrong.</p>
      <div className="error-link" onClick={() => navigateToHomePage()}>
        <i className="icon-home"></i> Go back to home page.
      </div>
    </div>
  );
};

NotFound.propTypes = {
  clearState: PropTypes.func,
  setError: PropTypes.func,
};

export default NotFound;
