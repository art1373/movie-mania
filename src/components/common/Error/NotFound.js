import React from "react";
import "./NotFound.scss";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

const NotFound = () => {
  const history = useHistory();

  const navigateToHomePage = () => {
    //   setError({ message: '', statusCode: null });
    //   clearState();
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
