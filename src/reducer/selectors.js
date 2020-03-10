import {createSelector} from "reselect";
import {Namespace} from "./../mocks/settings.js";

const filterFilmsByGenre = (state) => {
  const films = state[Namespace.DATA].films;
  const genre = state[Namespace.STATE].genre;

  return genre === `All genres` ? films : films.filter((film) => film.genre === genre);
};

export const getFilmsByGenre = createSelector(
    (state) => state,
    filterFilmsByGenre
);
