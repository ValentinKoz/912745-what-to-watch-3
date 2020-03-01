import React from "react";
import renderer from "react-test-renderer";
import ListMovie from "./list-movie.jsx";

const films = [
  {
    genre: ``,
    title: `Parasite`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1000,
    text: ``,
    director: ``,
    starring: ``,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }, {
    genre: ``,
    title: `Avengers: Endgame`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1000,
    text: ``,
    director: ``,
    starring: ``,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }, {
    genre: ``,
    title: `US`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1000,
    text: ``,
    director: ``,
    starring: ``,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }, {
    genre: ``,
    title: `Booksmart`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: ``,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1000,
    text: ``,
    director: ``,
    starring: ``,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];

it(`ListMovie is renderer correctly`, () => {
  const tree = renderer.create(
      <ListMovie onSetActiveItem={() => {}} films={films} onCardClickHandle={() => {}}/>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
