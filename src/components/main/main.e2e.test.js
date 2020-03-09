import React from "react";
import Enzyme, {mount} from "enzyme";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

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

const mockStore = configureStore([]);

const displayedItems = 8;

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should button click`, () => {
  const playButtonHandler = jest.fn();
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
  const main = mount(
      <Provider store={store}>
        <Main
          showPlayer={false}
          onShowPlayer={playButtonHandler}
          films={films}
          onPlayButtonClick={() => {}}
          onCardClickHandle={() => {}}
        />
      </Provider>
  );

  const playButton = main.find(`button.movie-card__button.btn.btn--play`);
  playButton.props().onClick();

  expect(playButtonHandler.mock.calls.length).toBe(1);
});
