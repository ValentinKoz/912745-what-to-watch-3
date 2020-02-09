import React from "react";
import renderer from "react-test-renderer";
import Main from "./main.jsx";

it(`Should Main renderer correctly`, () => {
  const tree = renderer
    .create(<Main
      genre={`Horror`}
      titleFilm={`it`}
      releaseDate={2017}
      filmsList={[`Rick and Morty`, `Toy story 4`]}
      onPlayButtonClick={() => {}}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
