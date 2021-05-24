import React from "react";
import PropTypes from "prop-types";
import reactDom from "react-dom";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }

  render() {
    const { isLoading } = this.state;
    return (
      <div>{this.state.isLoading ? "Loading" : "We are ready"}</div>
    )
  };
}

export default App;
