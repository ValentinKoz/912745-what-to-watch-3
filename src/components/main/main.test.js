import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

const films = [
  {
    genre: ``,
    title: `Parasite`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1,
    text: ``,
    director: ``,
    starring: ``,
  }, {
    genre: ``,
    title: `Avengers: Endgame`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1,
    text: ``,
    director: ``,
    starring: ``,
  }, {
    genre: ``,
    title: `US`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1,
    text: ``,
    director: ``,
    starring: ``,
  }, {
    genre: ``,
    title: `Booksmart`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1,
    text: ``,
    director: ``,
    starring: ``,
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
      onCardClickHandle={() => {}}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
