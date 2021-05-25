import React from "react";
import PropTypes from "prop-types";
import reactDom from "react-dom";
import axios from "axios";
import Movie from "./Movie";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts-proxy.now.sh/list_movies.json?  sort_by=rating");
    console.log(movies);
    this.setState({ movies, isLoading: false });
  }

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <div>
        {this.state.isLoading ? "Loading..." : this.state.movies.map(movie => {
          console.log(movie);
          return (<Movie
            id={movies.id}
            year={movies.year}
            title={movies.title}
            summary={movies.summary}
            poster={movies.medium_cover_image} />
          );
        })}
      </div>
    )
  };
}

export default App;
