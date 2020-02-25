import React from "react";
import ReactDOM from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import films from "./mocks/films.js";
import {reducer} from "./reducer.js";

const store = createStore(reducer);
//window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
ReactDOM.render(
  <Provider store={store}>
    <App
      genre={`Drama`}
      titleFilm={`The Grand Budapest Hotel`}
      releaseDate={2014}
      films={films}
    />
  </Provider>,
    document.getElementById(`root`)
);
