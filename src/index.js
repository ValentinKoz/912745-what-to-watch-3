import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";


ReactDOM.render(
    <App
      genre={`Drama`}
      titleFilm={`The Grand Budapest Hotel`}
      releaseDate={2014}
      films={films}
    />,
    document.getElementById(`root`)
);
