import {extend} from "./utils.js";
import films from "./mocks/films.js";

const initialState = {
  genre: `All genres`,
  films,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
