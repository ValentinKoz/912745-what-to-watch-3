import history from "../../history.js";
import {Path, adaptedAuth} from "./../../settings/settings.js";

const AuthorizationStatus = {
  AUTH: `AUTH`,
  NO_AUTH: `NO_AUTH`,
};

const initialState = {
  authorizationStatus: AuthorizationStatus.NO_AUTH,
  authInfo: {}
};

const ActionType = {
  REQUIRED_AUTHORIZATION: `REQUIRED_AUTHORIZATION`,
  ADD_AUTH_INFO: `ADD_AUTH_INFO`,
};

const ActionCreator = {
  requireAuthorization: (status) => {
    return {
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: status,
    };
  },
  addAuthInfo: (info) => {
    return {
      type: ActionType.ADD_AUTH_INFO,
      payload: info,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.REQUIRED_AUTHORIZATION:
      return Object.assign({}, state, {
        authorizationStatus: action.payload,
      });
    case ActionType.ADD_AUTH_INFO:
      return Object.assign({}, state, {
        authInfo: action.payload,
      });
  }

  return state;
};

const Operation = {
  checkAuth: () => (dispatch, getState, api) => {
    return api.get(Path.LOGIN)
        .then(() => {
          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
        })
        .catch((err) => {
          throw err;
        });
  },

  login: (authData) => (dispatch, getState, api) => {
    return api.post(Path.LOGIN, {
      email: authData.login,
      password: authData.password,
    })
        .then((response) => {
          const adaptedItem = adaptedAuth(response.data);

          dispatch(ActionCreator.requireAuthorization(AuthorizationStatus.AUTH));
          dispatch(ActionCreator.addAuthInfo(adaptedItem));
          history.push(Path.MAIN);
        })
        .catch((err)=> {
          throw err;
        });
  },
};


export {
  ActionCreator,
  ActionType,
  AuthorizationStatus,
  Operation,
  reducer,
};
