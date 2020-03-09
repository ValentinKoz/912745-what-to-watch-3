import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import ListMovie from "./list-movie.jsx";

const mockStore = configureStore([]);

const films = [
  {
    id: `1`,
    name: `Name1`,
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
  }, {
    id: `2`,
    name: `Name2`,
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
  }, {
    id: `3`,
    name: `Name3`,
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

it(`ListMovie is renderer correctly`, () => {
  const store = mockStore({
    [`DATA`]: {
      films,
      promo: films[0],
    },
    [`STATE`]: {
      genre: `All genres`,
      displayedItems,
    }
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <ListMovie onSetActiveItem={() => {}} films={films} onCardClickHandle={() => {}}/>
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        }).toJSON();

  expect(tree).toMatchSnapshot();
});
