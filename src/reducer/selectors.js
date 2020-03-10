import {createSelector} from "reselect";
import {Namespace} from "./../mocks/settings.js";

const filterFilmsByGenre = (state) => {
  const films = state[Namespace.data].films;
  const genre = state[Namespace.state].genre;

  return genre === `All genres` ? films : films.filter((film) => film.genre === genre);
};

export const getFilmsByGenre = createSelector(
    (state) => state,
    filterFilmsByGenre
);
