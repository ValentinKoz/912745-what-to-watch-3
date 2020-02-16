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
  };

  const screen = shallow(<CardMovie
    film={film}
    handleEventHover={handleEventHover}
  />);

  const cardArticle = screen.find(`article`);

  cardArticle.simulate(`mouseover`, callbackObj);

  expect(handleEventHover).toHaveBeenCalledTimes(1);

  expect(handleEventHover.mock.calls[0][0]).toMatchObject(film);
});
