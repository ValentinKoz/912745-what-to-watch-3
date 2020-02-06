import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";


ReactDOM.render(
    <App
      genre={`Drama`}
      titleFilm={`The Grand Budapest Hotel`}
      releaseDate={`2014`}
    />,
    document.getElementById(`root`)
);
