import React from "react";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";

const App = (props) => {

  const {genre, titleFilm, releaseDate, filmsList} = props;

  return <Main
    genre={genre}
    titleFilm={titleFilm}
    releaseDate={releaseDate}
    filmsList={filmsList}
  />;
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  filmsList: PropTypes.array
};

export default App;
