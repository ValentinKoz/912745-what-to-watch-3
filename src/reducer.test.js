import {reducer, ActionCreator, ActionType} from "./reducer.js";
import films from "./mocks/films.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    genre: `All genres`,
    films,
  });
});

it(`Reducere should change current genre`, () => {
  expect(reducer({
    genre: `All genres`,
    films,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Adventure`
  })).toEqual({
    genre: `Adventure`,
    films,
  });
});

it(`Action creator for change genre return correct action`, () => {
  expect(ActionCreator.changeGenre(`Comdey`)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: `Comdey`,
  });
});
