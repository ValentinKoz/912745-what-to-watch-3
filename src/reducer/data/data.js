import {extend} from "./../../utils.js";
import {adaptedObject} from "./../../mocks/settings.js";

const initialState = {
  films: [],
  promo: {},
  commentsToFilm: [],
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadPromo: (promo) => ({
    type: ActionType.LOAD_PROMO,
    payload: promo,
  }),
  loadComments: (comments) => ({
    type: ActionType.LOAD_COMMENTS,
    payload: comments,
  }),
};

const ActionType = {
  LOAD_FILMS: `LOAD_FILMS`,
  LOAD_PROMO: `LOAD_PROMO`,
  LOAD_COMMENTS: `LOAD_COMMENTS`,
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedResponse = response.data.map((item) => adaptedObject(item));
        dispatch(ActionCreator.loadFilms(adaptedResponse));
      });
  },
  loadPromo: () => (dispatch, getState, api) => {
    return api.get(`/films/promo`)
      .then((response) => {
        const adaptedItem = adaptedObject(response.data);
        dispatch(ActionCreator.loadPromo(adaptedItem));
      });
  },
  loadComments: (filmId) => (dispatch, getState, api) => {
    return api.get(`/comments/${filmId}`)
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  },
  postComment: (commnetData) => (dispatch, getState, api) => {
    return api.post(`/comments/${commnetData.id}`, {
      "rating": commnetData.rating,
      "comment": commnetData.comment,
    })
      .then((response) => {
        dispatch(ActionCreator.loadComments(response.data));
      });
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.LOAD_FILMS:
      return extend(state, {
        films: action.payload,
      });
    case ActionType.LOAD_PROMO:
      return extend(state, {
        promo: action.payload,
      });
    case ActionType.LOAD_COMMENTS:
      return extend(state, {
        commentsToFilm: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
