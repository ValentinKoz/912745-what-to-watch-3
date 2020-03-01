import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import App from "./app.jsx";

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

const displayedItems = 8;

it(`Render App`, () => {
  const store = mockStore({
    genre: `All genres`,
    films,
    displayedItems,
  });
  const tree = renderer
    .create(
        <Provider store={store}>
          <App
            activeItem={null}
            onSetActiveItem={() => {}}
            genre={`Horror`}
            titleFilm={`it`}
            releaseDate={2017}
            films={films}
          />
        </Provider>, {
          createNodeMock: () => {
            return {};
          }
        })
        .toJSON();

  expect(tree).toMatchSnapshot();
});
