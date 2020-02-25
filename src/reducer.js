import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  films: films,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  setMovieList: () => ({
    type: ActionType.SET_MOVIE_LIST,
  }),
};

const ActionType = {
  CHANGE_GENRE: "CHANGE_GENRE",
  SET_MOVIE_LIST: "SET_MOVIE_LIST",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });

    case ActionType.SET_MOVIE_LIST:
      return state;

    return state;
  }
};

export {reducer, ActionType, ActionCreator};
