import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import PageMovie from "./page-movie.jsx";
import {Namespace} from "./../../mocks/settings.js";

const films = [{}, {}, {}];

const mockStore = configureStore([]);

const film = {
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
};

const displayedItems = 8;

it(`PageMovie is renderer correctly`, () => {
  const store = mockStore({
    [Namespace.data]: {
      films,
      promo: films[0],
    },
    [Namespace.state]: {
      genre: `All genres`,
      displayedItems,
    }
  });
  const tree = renderer.create(
      <Provider store={store}>
        <PageMovie films={films} film={film} onCardClickHandle={() => {}} showPlayer={false} onShowPlayer={() => {}} />
      </Provider>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
