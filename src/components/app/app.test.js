import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";
import {Namespace} from "./../../mocks/settings.js";

const mockStore = configureStore([]);

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
  },
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

const displayedItems = 8;

it(`Render App`, () => {
  const store = mockStore({
    [Namespace.DATA]: {
      films,
      promo: films[0],
    },
    [Namespace.STATE]: {
      genre: `All genres`,
      displayedItems,
    },
    [Namespace.USER]: {
      authorizationStatus: `NO_AUTH`,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            showPlayer={false}
            onShowPlayer={() => {}}
            activeItem={null}
            onSetActiveItem={() => {}}
            films={films}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
