import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from "react-redux";
import App from "./components/app/app.jsx";
import reducer from "./reducer/reducer.js";
import {createAPI} from "./api.js";
import thunk from "redux-thunk";
import {Operation as Data} from "./reducer/data/data.js";
import {Operation as User, ActionCreator, AuthorizationStatus} from "./reducer/user/user.js";
import {withActiveItem} from "./hocs/with-active-item/with-active-item.js";
import {withShowPlayer} from "./hocs/with-show-player/with-show-player.js";

const onUnauthorized = () => {
  store.dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.NO_AUTH));
};

const api = createAPI(onUnauthorized);

const AppWrapped = withShowPlayer(withActiveItem(App));

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(thunk.withExtraArgument(api))
    )
);

store.dispatch(Data.loadFilms());
store.dispatch(Data.loadPromo());
store.dispatch(User.checkAuth());

ReactDOM.render(
    <Provider store={store}>
      <AppWrapped/>
    </Provider>,
    document.getElementById(`root`)
);
