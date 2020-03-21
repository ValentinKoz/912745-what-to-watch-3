import {extend} from "./../../utils.js";
import {adaptedObject, Namespace} from "./../../mocks/settings.js";

const initialState = {
  films: [],
  promo: {},
  commentsToFilm: [],
  favoriteFilms: [],
};

const ActionCreator = {
  loadFilms: (films) => ({
    type: ActionType.LOAD_FILMS,
    payload: films,
  }),
  loadFavorite: (films) => ({
    type: ActionType.LOAD_FAVORITE,
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
  LOAD_FAVORITE: `LOAD_FAVORITE`,
};

const Operation = {
  loadFilms: () => (dispatch, getState, api) => {
    return api.get(`/films`)
      .then((response) => {
        const adaptedResponse = response.data.map((item) => adaptedObject(item));
        dispatch(ActionCreator.loadFilms(adaptedResponse));
      });
  },
  loadFavorite: () => (dispatch, getState, api) => {
    return api.get(`/favorite`)
      .then((response) => {
        const adaptedResponse = response.data.map((item) => adaptedObject(item));
        dispatch(ActionCreator.loadFavorite(adaptedResponse));
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
  },
  changeFavorite: (film) => (dispatch, getState, api) => {
    return api.post(`/favorite/${film.id}/${film.status}`)
      .then((response) => {
        const adaptedItem = adaptedObject(response.data);
        const state = getState();

        if (state[Namespace.DATA].promo.id === adaptedItem.id) {
          dispatch(ActionCreator.loadPromo(adaptedItem));
        }

        const films = [...state[Namespace.DATA].films.filter((movie) => movie.id !== adaptedItem.id), adaptedItem];
        dispatch(ActionCreator.loadFilms(films));
      });
  },
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
    case ActionType.LOAD_FAVORITE:
      return extend(state, {
        favoriteFilms: action.payload,
      });
    default:
      return state;
  }
};

export {reducer, Operation, ActionType, ActionCreator};
