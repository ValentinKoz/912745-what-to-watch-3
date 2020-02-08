import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main";

Enzyme.configure({
  adapter: new Adapter()
});

it(`Should button click`, () => {
  const playButtonHandler = jest.fn();

  const main = shallow(<Main
    genre={`Horror`}
    titleFilm={`it`}
    releaseDate={2017}
    filmsList={[`Rick and Morty`, `Toy story 4`]}
    onPlayButtonClick={playButtonHandler}
  />
  );

  const playButton = main.find(`button.movie-card__button.btn.btn--play`);
  playButton.props().onClick();

  expect(playButtonHandler.mock.calls.length).toBe(1);
});
