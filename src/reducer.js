import {extend} from "./utils.js";
import films from "./mocks/films.js";
import {DISPLAYED_ITEMS, ADD_TO_SHOW} from "./mocks/settings.js";

const initialState = {
  genre: `All genres`,
  films,
  displayedItems: DISPLAYED_ITEMS,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  showMore: () => ({
    type: ActionType.SHOW_MORE,
    payload: null,
  }),
  resetList: () => ({
    type: ActionType.RESET_LIST,
    payload: null
  }),
};

const ActionType = {
  CHANGE_GENRE: `CHANGE_GENRE`,
  SHOW_MORE: `SHOW_MORE`,
  RESET_LIST: `RESET_LIST`,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return extend(state, {
        genre: action.payload
      });
    case ActionType.SHOW_MORE:
      return extend(state, {
        displayedItems: ADD_TO_SHOW + state.displayedItems,
      });
    case ActionType.RESET_LIST:
      return extend(state, {
        displayedItems: ADD_TO_SHOW
      });
    default:
      return state;
  }
};

export {reducer, ActionType, ActionCreator};
