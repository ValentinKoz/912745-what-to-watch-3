import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CardMovie from "./card-movie.jsx";

configure({adapter: new Adapter()});

const mock = {
  film: {
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
};

it(`Hover on card should pass to the callback`, () => {
  const {film} = mock;
  const handleEventHover = jest.fn();
  const callbackObj = {
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

  const screen = shallow(<CardMovie
    film={film}
    onEventHover={handleEventHover}
    onCardClickHandle={() => {}}
    onEventHoverOut={() => {}}
  />);

  const cardArticle = screen.find(`article`);

  cardArticle.simulate(`mouseenter`, callbackObj);

  expect(handleEventHover).toHaveBeenCalledTimes(1);

  expect(handleEventHover.mock.calls[0][0]).toMatchObject(film);
});

it(`Click on img or a should pass to the callback`, () => {
  const {film} = mock;
  const onCardClickHandle = jest.fn();
  const callbackObj = {
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

  const screen = shallow(<CardMovie
    film={film}
    onEventHover={() => {}}
    onCardClickHandle={onCardClickHandle}
    onEventHoverOut={() => {}}
  />);

  const article = screen.find(`article`);
  const a = screen.find(`a`);

  a.simulate(`click`, callbackObj);
  article.simulate(`click`, callbackObj);

  expect(onCardClickHandle).toHaveBeenCalledTimes(2);

});
