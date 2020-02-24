import React from "react";
import renderer from "react-test-renderer";
import TabReviews from "./tab-reviews.jsx";

const film = {
  reviews: [{
    text: `Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the directors funniest and most exquisitely designed movies in years.`,
    author: `Kate Muir`,
    time: `December 24, 2016`,
    rating: `8,9`
  }, {
    text: `Andersons films are too precious for some, but for those of us willing to lose ourselves in them, theyre a delight. The Grand Budapest Hotel is no different, except that he has added a hint of gravitas to the mix, improving the recipe.`,
    author: `Bill Goodykoontz`,
    time: `November 18, 2015`,
    rating: `8,0`
  }]
};

it(`Should TabReviews renderer correctly`, () => {
  const tree = renderer
    .create(<TabReviews
      film = {film}
    />).toJSON();

  expect(tree).toMatchSnapshot();
});
