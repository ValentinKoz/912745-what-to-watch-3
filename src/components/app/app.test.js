import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

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

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      genre={`Horror`}
      titleFilm={`it`}
      releaseDate={2017}
      films={films}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
