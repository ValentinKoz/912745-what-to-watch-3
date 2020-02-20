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
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`CardMovie is renderer correctly`, () => {
  const tree = renderer.create(
      <CardMovie film={film} handleEventHover={() => {}} onCardClickHandle={() => {}} handleEventHoverOut={() => {}} />, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
