import React from "react";
import renderer from "react-test-renderer";
import TabOverview from "./tab-overview.jsx";

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

it(`Should TabOverview renderer correctly`, () => {
  const tree = renderer
    .create(<TabOverview
      film = {film}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
