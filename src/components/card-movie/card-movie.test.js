import React from "react";
import renderer from "react-test-renderer";
import CardMovie from "./card-movie.jsx";

const film = {
  genre: ``,
  title: `Booksmart`,
  releaseDate: 0,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  bgPoster: ``,
  ratingScore: ``,
  ratingLevel: ``,
  ratingCount: 1000,
  text: ``,
  starring: ``,
};

it(`CardMovie is renderer correctly`, () => {
  const tree = renderer.create(
      <CardMovie film={film} handleEventHover={() => {}} onCardClickHandle={() => {}}/>
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
