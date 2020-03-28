import React from "react";
import renderer from "react-test-renderer";
import {FullVideoPlayer} from "./full-video-player.jsx";
import {BrowserRouter} from "react-router-dom";

const movie = {
  id: `1`,
  name: `Name`,
  poster: `https://htmlacademy-react-3.appspot.com/wtw/static/film/poster/Snatch.jpg`,
  preview: `https://htmlacademy-react-3.appspot.com/wtw/static/film/preview/snatch.jpg`,
  backgroundImg: `https://htmlacademy-react-3.appspot.com/wtw/static/film/background/Snatch.jpg`,
  backgroundColor: `#FDFDFC`,
  video: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  previewVideo: `http://peach.themazzone.com/durian/movies/sintel-1024-surround.mp4`,
  description: `text...`,
  rating: 8.0,
  scoresCount: 43241,
  director: `Guy Ritchie`,
  starring: [`Jason Statham`, `Brad Pitt`, `Benicio Del Toro`],
  runTime: 104,
  genre: `Comedy`,
  released: 2000,
  isFavorite: false
};

it(`Render Full Video Player`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <FullVideoPlayer
            onExit={()=>{}}
            films={[movie]}
            _videoRef={React.createRef()}
            isPlaying={true}
            getRemainingTime={() => {}}
            onLoadMetaData={() => {}}
            onFullScreen={() => {}}
            getProgress={() => {}}
            onTimeUpdate={() => {}}
            onVideoPlay={() => {}}
            location={{pathname: `films/player/1`}}
          />
        </BrowserRouter>, {
          createNodeMock: () => {
            return {};
          }
        })
      .toJSON();

  expect(tree).toMatchSnapshot();
});
