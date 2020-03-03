import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

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
    starring: ``,
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
    starring: ``,
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
    starring: ``,
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
    starring: ``,
  }
];

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should button click`, () => {
  const playButtonHandler = jest.fn();

  const main = shallow(<Main
    showPlayer={false}
    onShowPlayer={playButtonHandler}
    genre={`Horror`}
    titleFilm={`it`}
    releaseDate={2017}
    films={films}
    onPlayButtonClick={() => {}}
    onCardClickHandle={() => {}}
  />
  );

  const playButton = main.find(`button.movie-card__button.btn.btn--play`);
  playButton.props().onClick();

  expect(playButtonHandler.mock.calls.length).toBe(1);
});
