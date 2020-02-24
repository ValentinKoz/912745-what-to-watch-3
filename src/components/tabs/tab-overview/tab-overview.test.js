import React from "react";
import renderer from "react-test-renderer";
import TabOverview from "./tab-overview.jsx";

const film = {
  genre: `action`,
  releaseDate: 1998,
  poster: ``,
  bgPoster: ``,
  ratingScore: `0,0`,
  ratingLevel: `OK`,
  ratingCount: 0,
  text: `text...`,
  director: `Steven Zaillian`,
  runTime: `1h 39m`,
  starring: `John Travolta, Robert Duvall, Stephen Fry`,
  reviews: []
};

it(`Should TabOverview renderer correctly`, () => {
  const tree = renderer
    .create(<TabOverview
      film = {film}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
