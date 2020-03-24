import React from "react";
import renderer from "react-test-renderer";
import {Provider} from "react-redux";
import PrivateRoute from "./private-route.jsx";
import configureStore from "redux-mock-store";
import {Namespace} from "./../../settings/settings.js";
import {AuthorizationStatus} from "../../reducer/user/user.js";
import {BrowserRouter} from "react-router-dom";
import {Path} from "./../../settings/settings.js";

const mockStore = configureStore([]);

it(`PrivateRoute is renderer correctly`, () => {
  const store = mockStore({
    [Namespace.USER]: {
      authorizationStatus: `AUTH`
    }
  });
  const tree = renderer.create(
      <Provider store={store}>
        <BrowserRouter>
          <PrivateRoute render={() => (<div>DIV</div>)} path={Path.LOGIN} exact={true} authorizationStatus={AuthorizationStatus.AUTH} />
        </BrowserRouter>
      </Provider>, {
        createNodeMock: () => {
          return {};
        }
      }
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
