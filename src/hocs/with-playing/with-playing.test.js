import React from "react";
import renderer from "react-test-renderer";
import {withPlaying} from "./with-playing.js";

const movie = {
  genre: `genre`,
  title: `title`,
  releaseDate: 1000,
  poster: `img/the-grand-budapest-hotel-poster.jpg`,
  bgPoster: `img/moonrise-kingdom.jpg`,
  ratingScore: `0,0`,
  ratingLevel: `level`,
  ratingCount: 1,
  text: `...text`,
  director: `director`,
  runTime: `0h 00m`,
  starring: `starring`,
  video: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  reviews: [{
    text: `...text`,
    author: `author`,
    time: `December 24, 2016`,
    rating: `0,0`
  }]
};

const MockComponent = () => <div></div>;
const MockComponentWrapped = withPlaying(MockComponent);

it(`withPlaying is renderer correctly`, () => {
  const tree = renderer
    .create(
        <MockComponentWrapped
          isPlaying={true}
          poster={movie.poster}
          video={movie.video}
        />
    )
    .toJSON();

  expect(tree).toMatchSnapshot();
});
