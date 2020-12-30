import React, { Component } from "react";
import Notfound from "./NotFound";
import PropTypes from "prop-types";

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }
  componentDidCatch(error, info) {
    this.setState({ error });
  }

  clearState = () => {
    this.setState({ error: null, errorInfo: null });
  };

  render() {
    if (this.state.error) {
      return <Notfound clearState={this.clearState} />;
    }
    return this.props.children;
  }
}

ErrorBoundry.propTypes = {
  children: PropTypes.any,
};

export default ErrorBoundry;
