import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import Video from "./video.jsx";

configure({adapter: new Adapter()});

const mock = {
  film: {
    genre: ``,
    title: `Parasite`,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: 1000,
    text: ``,
    starring: ``,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
};

it(`Video correctly work`, () => {
  const {video, bgPoster} = mock.film;
  const hoverHandler = jest.fn();

  const videoItem = shallow(<Video
    video={video}
    poster={bgPoster}
  />);
  const div = videoItem.find(`.small-movie-card__image`);
  expect(videoItem.state().isPlaying).toEqual(false);
  div.simulate(`mouseover`, hoverHandler);
  jest.advanceTimersByTime(1000);
  expect(videoItem.state().isPlaying).toEqual(true);

});
