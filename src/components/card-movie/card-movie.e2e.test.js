import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import CardMovie from "./card-movie.jsx";

configure({adapter: new Adapter()});

const mock = {
  film: {
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
  }
};

it(`Hover on card should pass to the callback`, () => {
  const {film} = mock;
  const handleEventHover = jest.fn();
  const callbackObj = {
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
  };

  const screen = shallow(<CardMovie
    film={film}
    handleEventHover={handleEventHover}
    onCardClickHandle={() => {}}
  />);

  const cardArticle = screen.find(`article`);

  cardArticle.simulate(`mouseover`, callbackObj);

  expect(handleEventHover).toHaveBeenCalledTimes(1);

  expect(handleEventHover.mock.calls[0][0]).toMatchObject(film);
});

it(`Click on img or a should pass to the callback`, () => {
  const {film} = mock;
  const onCardClickHandle = jest.fn();
  const callbackObj = {
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
  };

  const screen = shallow(<CardMovie
    film={film}
    handleEventHover={() => {}}
    onCardClickHandle={onCardClickHandle}
  />);

  const img = screen.find(`.small-movie-card__image`);
  const a = screen.find(`a`);

  a.simulate(`click`, callbackObj);
  img.simulate(`click`, callbackObj);

  expect(onCardClickHandle).toHaveBeenCalledTimes(2);

});
