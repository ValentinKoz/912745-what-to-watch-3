import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as state} from "./state/state.js";
import {Namespace} from "./../mocks/settings.js";

export default combineReducers({
  [Namespace.data]: data,
  [Namespace.state]: state
});
