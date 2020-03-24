import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import configureStore from "redux-mock-store";
import {MyList} from "./my-list.jsx";
import {Namespace} from "./../../settings/settings.js";
import {BrowserRouter} from "react-router-dom";

const films = [{}, {}, {}];

const mockStore = configureStore([]);

const film = [{
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
  isFavorite: true
}];

const displayedItems = 8;

it(`PageMovie is renderer correctly`, () => {
  const store = mockStore({
    [Namespace.DATA]: {
      films,
      promo: films[0],
      favoriteFilms: film,
    },
    [Namespace.STATE]: {
      genre: `All genres`,
      displayedItems,
    },
    [Namespace.USER]: {
      authorizationStatus: `AUTH`,
      authInfo: {
        "id": `1`,
        "email": `Oliver.conner@gmail.com`,
        "name": `Oliver.conner`,
        "avatarUrl": `img/1.png`
      }
    }
  });
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <MyList onCardClickHandle={() => {}} favoriteFilms={film} loadFilms={()=>{}} authInfo={{
            "id": `1`,
            "email": `Oliver.conner@gmail.com`,
            "name": `Oliver.conner`,
            "avatarUrl": `img/1.png`
          }}/>
        </BrowserRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }).toJSON();

  expect(tree).toMatchSnapshot();
});
