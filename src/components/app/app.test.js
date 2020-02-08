import React from "react";
import renderer from "react-test-renderer";
import App from "./app.jsx";

it(`Render App`, () => {
  const tree = renderer
    .create(<App
      genre={`Horror`}
      titleFilm={`it`}
      releaseDate={2017}
      filmsList={[`Rick and Morty`, `Toy story 4`]}
    />)
      .toJSON();

  expect(tree).toMatchSnapshot();
});
