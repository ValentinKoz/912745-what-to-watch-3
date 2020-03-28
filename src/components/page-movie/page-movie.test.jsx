import React from "react";
import renderer from "react-test-renderer";
import {PageMovie} from "./page-movie.jsx";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {Namespace} from "./../../settings/settings.js";

const mockStore = configureStore([]);

const displayedItems = 8;

const film = {
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

it(`PageMovie is renderer correctly`, () => {
  const store = mockStore({
    [Namespace.DATA]: {
      films: [film],
      promo: film,
    },
    [Namespace.STATE]: {
      genre: `All genres`,
      displayedItems,
    },
    [Namespace.USER]: {
      authorizationStatus: `NO_AUTH`
    }
  });
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PageMovie authorizationStatus={`NO_AUTH`} authInfo={{}} location={{pathname: `films/player/1`}} onChangeFavorite={()=>{}} films={[film]} onCardClickHandle={() => {}} showPlayer={false} onShowPlayer={() => {}} />
        </BrowserRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
