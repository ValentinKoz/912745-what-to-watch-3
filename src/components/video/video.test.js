import React from "react";
import renderer from "react-test-renderer";
import Video from "./video.jsx";

const film = {
  genre: ``,
  title: `Parasite`,
  releaseDate: 0,
  poster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  bgPoster: `img/fantastic-beasts-the-crimes-of-grindelwald.jpg`,
  ratingScore: ``,
  ratingLevel: ``,
  ratingCount: 1000,
  text: ``,
  director: ``,
  starring: ``,
  video: `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`,
};

it(`Render Video`, () => {
  const tree = renderer
    .create(<Video
      poster={film.bgPoster}
      videoSrc={film.video}
      isPlaying={false}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
