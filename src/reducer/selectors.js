import {createSelector} from "reselect";

const filterFilmsByGenre = (state) => {
  const films = state[`DATA`].films;
  const genre = state[`STATE`].genre;

  return genre === `All genres` ? films : films.filter((film) => film.genre === genre);
};

export const getFilmsByGenre = createSelector(
    (state) => state,
    filterFilmsByGenre
);
