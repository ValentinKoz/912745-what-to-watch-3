import MockAdapter from "axios-mock-adapter";
import {createAPI} from "../../api.js";
import {reducer, ActionType, Operation} from "./data.js";

const api = createAPI(() => {});

const films = [
  {
    id: `1`,
    name: `Name`,
    poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Snatch.jpg`,
    preview: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/snatch.jpg`,
    backgroundImg: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Snatch.jpg`,
    backgroundColor: `#FDFDFC`,
    video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    previewVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
    description: `text...`,
    rating: 8.0,
    scoresCount: 43241,
    director: `Guy Ritchie`,
    starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
    runTime: 104,
    genre: `Comedy`,
    released: 2000,
    isFavorite: false
  }
];

const film = {
  id: 1,
  name: `The Grand Budapest Hotel`,
  [`poster_image`]: `img/the-grand-budapest-hotel-poster.jpg`,
  [`preview_image`]: `img/the-grand-budapest-hotel.jpg`,
  [`background_image`]: `img/the-grand-budapest-hotel-bg.jpg`,
  [`background_color`]: `#ffffff`,
  [`video_link`]: `https://some-link`,
  [`preview_video_link`]: `https://some-link`,
  description: `a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  [`scores_count`]: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  [`run_time`]: 99,
  genre: `Comedy`,
  released: 2014,
  [`is_favorite`]: false
};

const afterFilm = {
  id: `1`,
  name: `The Grand Budapest Hotel`,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  preview: `img/the-grand-budapest-hotel.jpg`,
  backgroundImg: `img/the-grand-budapest-hotel-bg.jpg`,
  backgroundColor: `#ffffff`,
  video: `https://some-link`,
  previewVideo: `https://some-link`,
  description: `a junior lobby boy, becomes Gustave's friend and protege.`,
  rating: 8.9,
  scoresCount: 240,
  director: `Wes Andreson`,
  starring: [`Bill Murray`, `Edward Norton`, `Jude Law`, `Willem Dafoe`, `Saoirse Ronan`],
  runTime: 99,
  genre: `Comedy`,
  released: 2014,
  isFavorite: false
};


const comments = [
  {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }, {
    id: 1,
    user: {
      id: 4,
      name: `Kate Muir`
    },
    rating: 8.9,
    comment: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director's funniest and most exquisitely designed movies in years.`,
    date: `2019-05-08T14:13:56.569Z`
  }
];

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    films: [],
    promo: {},
    commentsToFilm: [],
    favoriteFilms: [],
  });
});

it(`Reducer should load films`, () => {
  expect(reducer({
    films: [],
    promo: {},
    commentsToFilm: [],
    favoriteFilms: [],
  }, {
    type: ActionType.LOAD_FILMS,
    payload: films
  })
  ).toEqual({
    films,
    promo: {},
    commentsToFilm: [],
    favoriteFilms: [],
  });
});

it(`Reducer should load promo`, () => {
  expect(reducer({
    films: [],
    promo: {},
    commentsToFilm: [],
    favoriteFilms: [],
  }, {
    type: ActionType.LOAD_PROMO,
    payload: films[0]
  })
  ).toEqual({
    films: [],
    promo: films[0],
    commentsToFilm: [],
    favoriteFilms: [],
  });
});

it(`Reducer should load comments`, () => {
  expect(reducer({
    films: [],
    promo: {},
    commentsToFilm: [],
    favoriteFilms: [],
  }, {
    type: ActionType.LOAD_COMMENTS,
    payload: comments
  })
  ).toEqual({
    films: [],
    promo: {},
    commentsToFilm: comments,
    favoriteFilms: [],
  });
});

it(`Should make a correct Api`, () => {
  const mock = new MockAdapter(api);
  const dispatch = jest.fn();


  mock.onGet(`/films`).reply(200, []);
  Operation.loadFilms()(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.LOAD_FILMS,
      payload: []
    });
  });
});

it(`Should make a correct Api`, () => {
  const mock = new MockAdapter(api);
  const dispatch = jest.fn();

  mock.onGet(`/films/promo`).reply(200, film);
  Operation.loadPromo()(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.LOAD_PROMO,
      payload: afterFilm,
    });
  });
});

it(`Should make a correct Api`, () => {
  const mock = new MockAdapter(api);
  const dispatch = jest.fn();

  mock.onGet(`/comments/1`).reply(200, []);
  Operation.loadComments(1)(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.LOAD_COMMENTS,
      payload: []
    });
  });
});
