import React from "react";
import Main from "./../main/main.jsx";

const App = (props) => {
  // eslint-disable-next-line react/prop-types
  const {genre, titleFilm, releaseDate} = props;

  return <Main
    genre={genre}
    titleFilm={titleFilm}
    releaseDate={releaseDate}
  />;
};

export default App;
