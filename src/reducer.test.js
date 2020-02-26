import {reducer, ActionCreator, ActionType} from "./reducer.js";
import films from "./mocks/films.js";
import {displayedItems} from "./mocks/settings.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    genre: `All genres`,
    films,
    displayedItems,
  });
});

it(`Reducere should change current genre`, () => {
  expect(reducer({
    genre: `All genres`,
    films,
    displayedItems,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Adventure`
  })).toEqual({
    genre: `Adventure`,
    films,
    displayedItems,
  });
});

it(`Action creator for change genre return correct action`, () => {
  expect(ActionCreator.changeGenre(`Comdey`)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: `Comdey`,
  });
});
