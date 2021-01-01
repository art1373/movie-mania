import React, { Component } from "react";
import Notfound from "./NotFound";
import PropTypes from "prop-types";
import * as Sentry from "@sentry/react";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, info) {
    console.log("error boundry", { error, info });
    this.setState({ error });
  }

  clearState = () => {
    this.setState({ error: null, errorInfo: null });
  };

  render() {
    return (
      <Sentry.ErrorBoundary fallback={<Notfound />}>
        {this.props.children}
      </Sentry.ErrorBoundary>
    );
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.any,
};

export default ErrorBoundry;
