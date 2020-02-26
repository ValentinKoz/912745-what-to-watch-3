import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import Main from "./main.jsx";

const mockStore = configureStore([]);

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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
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
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
];

it(`Should Main renderer correctly`, () => {
  const store = mockStore({
    genre: `All genres`,
    films,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <Main
            genre={`Horror`}
            titleFilm={`it`}
            releaseDate={2017}
            films={films}
            onPlayButtonClick={() => {}}
            onCardClickHandle={() => {}}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
