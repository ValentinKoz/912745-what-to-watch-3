import React from "react";
import PropTypes from "prop-types";
import Main from "./../main/main.jsx";

const playButtonHandler = () => {};

const App = (props) => {

  const {genre, titleFilm, releaseDate, films} = props;

  return <Main
    genre={genre}
    titleFilm={titleFilm}
    releaseDate={releaseDate}
    films={films}
    onPlayButtonClick={playButtonHandler}
  />;
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  titleFilm: PropTypes.string.isRequired,
  releaseDate: PropTypes.number.isRequired,
  films: PropTypes.array
};

export default App;
