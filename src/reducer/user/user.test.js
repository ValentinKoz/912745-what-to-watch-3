import {reducer, ActionType, Operation, AuthorizationStatus} from "./user.js";
import MockAdapter from "axios-mock-adapter";
import {Path} from "./../../settings/settings.js";
import {createAPI} from "../../api.js";

const api = createAPI(() => {});

it(`Reducer without additional parameters should return initial state`, () => {
  expect(reducer(undefined, {})).toEqual({
    authorizationStatus: `NO_AUTH`,
    authInfo: {}
  });
});

it(`Reducere should change`, () => {
  expect(reducer({
    authorizationStatus: AuthorizationStatus.NO_AUTH,
  }, {
    type: ActionType.REQUIRED_AUTHORIZATION,
    payload: AuthorizationStatus.AUTH
  })).toEqual({
    authorizationStatus: AuthorizationStatus.AUTH,
  });
});

it(`Reducere should change`, () => {
  expect(reducer({
    authInfo: {},
  }, {
    type: ActionType.ADD_AUTH_INFO,
    payload: {auth: `auth`}
  })).toEqual({
    authInfo: {auth: `auth`},
  });
});


it(`Should make a correct get login`, () => {
  const mock = new MockAdapter(api);
  const dispatch = jest.fn();


  mock.onGet(Path.LOGIN).reply(200, []);
  Operation.checkAuth()(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(1);
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH
    });
  });
});

it(`Should make a correct post login`, () => {
  const mock = new MockAdapter(api);
  const dispatch = jest.fn();
  const login = Operation.login({
    login: `login@login.ru`,
    password: `Password`,
  });

  mock.onPost(Path.LOGIN).reply(200, []);
  return login(dispatch, () => {}, api).then(() => {
    expect(dispatch).toHaveBeenCalledTimes(2);
    expect(dispatch).toHaveBeenCalledWith({
      type: ActionType.REQUIRED_AUTHORIZATION,
      payload: AuthorizationStatus.AUTH,
    });
  });
});
