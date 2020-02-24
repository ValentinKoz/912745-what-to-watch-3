import React from "react";
import renderer from "react-test-renderer";
import TabDetails from "./tab-details.jsx";

const film = {
  genre: `action`,
  releaseDate: 1998,
  poster: ``,
  bgPoster: ``,
  ratingScore: ``,
  ratingLevel: ``,
  ratingCount: 0,
  text: ``,
  director: `Steven Zaillian`,
  runTime: `1h 39m`,
  starring: `John Travolta, Robert Duvall, Stephen Fry`,
  reviews: []
};

it(`Should TabDetails renderer correctly`, () => {
  const tree = renderer
    .create(<TabDetails
      film = {film}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
