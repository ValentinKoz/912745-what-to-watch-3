import React from "react";
import Enzyme, {mount} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Video from "./video.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

const mock = {
  film: {
    genre: ``,
    title: ``,
    releaseDate: 0,
    poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    bgPoster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
    ratingScore: ``,
    ratingLevel: ``,
    ratingCount: ``,
    text: ``,
    starring: ``,
    video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
  }
};

it(`Video correctly work`, () => {
  const {video, bgPoster} = mock.film;

  const videoWrapper = (isPlaying) => {
    return mount(<Video
      video={video}
      poster={bgPoster}
      isPlaying={isPlaying}
    />);
  };

  expect(videoWrapper(true).state(`isPlaying`)).toBe(true);
  expect(videoWrapper(false).state(`isPlaying`)).toBe(false);
});
