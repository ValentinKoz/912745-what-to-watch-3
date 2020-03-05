import React from "react";
import renderer from "react-test-renderer";
import FullVideoPlayer from "./full-video-player.jsx";

const movie = {
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

it(`Render Full Video Player`, () => {
  const tree = renderer
    .create(<FullVideoPlayer
      onExit={()=>{}}
      movie={movie}
      _videoRef={React.createRef()}
      isPlaying={true}
      getRemainingTime={() => {}}
      handleLoadMetaData={() => {}}
      handleFullScreen={() => {}}
      getProgress={() => {}}
      handleTimeUpdate={() => {}}
      handleVideoPlay={() => {}}
    />, {
      createNodeMock: () => {
        return {};
      }
    })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
