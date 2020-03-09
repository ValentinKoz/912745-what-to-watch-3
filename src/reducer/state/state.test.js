import {reducer, ActionCreator, ActionType} from "./state.js";
import {DISPLAYED_ITEMS} from "./../../mocks/settings.js";

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    genre: `All genres`,
    displayedItems: DISPLAYED_ITEMS,
  });
});

it(`Reducere should change current genre`, () => {
  expect(reducer({
    genre: `All genres`,
    displayedItems: DISPLAYED_ITEMS,
  }, {
    type: ActionType.CHANGE_GENRE,
    payload: `Adventure`
  })).toEqual({
    genre: `Adventure`,
    displayedItems: DISPLAYED_ITEMS,
  });
});

it(`Action creator for change genre return correct action`, () => {
  expect(ActionCreator.changeGenre(`Comdey`)).toEqual({
    type: ActionType.CHANGE_GENRE,
    payload: `Comdey`,
  });
});

it(`show more should change current displayed items`, () => {
  expect(reducer({
    genre: `All genres`,
    displayedItems: DISPLAYED_ITEMS,
  }, {
    type: ActionType.SHOW_MORE,
    payload: null
  })).toEqual({
    genre: `All genres`,
    displayedItems: DISPLAYED_ITEMS + 8,
  });
});

it(`reset list should change current displayed items`, () => {
  expect(reducer({
    genre: `All genres`,
    displayedItems: 20,
  }, {
    type: ActionType.RESET_LIST,
    payload: null
  })).toEqual({
    genre: `All genres`,
    displayedItems: DISPLAYED_ITEMS,
  });
});
