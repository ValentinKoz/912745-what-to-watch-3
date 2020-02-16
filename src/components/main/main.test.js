import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const films = [
  {
    genre: ``,
    title: `Parasite`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }, {
    genre: ``,
    title: `Avengers: Endgame`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }, {
    genre: ``,
    title: `US`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }, {
    genre: ``,
    title: `Booksmart`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  }
];

it(`Should Main renderer correctly`, () => {
  const tree = renderer
    .create(<Main
      genre={`Horror`}
      titleFilm={`it`}
      releaseDate={2017}
      films={films}
      onPlayButtonClick={() => {}}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
