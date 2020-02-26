import React from "react";
import renderer from "react-test-renderer";
import TabList from "./tab-list.jsx";

const film = {
  genre: `Жанр`,
  title: `Title`,
  releaseDate: 0,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgPoster: `img/moonrise-kingdom.jpg`,
  ratingScore: `8,9`,
  ratingLevel: `level`,
  ratingCount: 240,
  text: `текст...`,
  director: `Director`,
  runTime: `0h 00m`,
  starring: `starring`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  reviews: [{
    text: `reviews`,
    author: `Kate Muir`,
    time: `December 24, 2016`,
    rating: `8,9`
  }]
};

it(`Render list tabs correctly`, () => {
  const tree = renderer
    .create(
        <TabList
          film={film}
        />
    ).toJSON();

  expect(tree).toMatchSnapshot();
});
