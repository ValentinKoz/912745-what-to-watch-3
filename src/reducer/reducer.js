import {combineReducers} from "redux";
import {reducer as data} from "./data/data.js";
import {reducer as state} from "./state/state.js";

export default combineReducers({
  [`DATA`]: data,
  [`STATE`]: state
});
