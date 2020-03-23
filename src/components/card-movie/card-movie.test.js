import React from "react";
import renderer from "react-test-renderer";
import CardMovie from "./card-movie.jsx";

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

it(`CardMovie is renderer correctly`, () => {
  const tree = renderer.create(
      <CardMovie film={film} onEventHover={() => {}} onCardClickHandle={() => {}} onEventHoverOut={() => {}} />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
