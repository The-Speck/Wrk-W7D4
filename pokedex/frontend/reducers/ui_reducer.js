// import { RECEIVE_ERRORS } from '../actions/pokemon_actions';
import {merge} from "lodash";

const defaultState = {};

export const uiReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case "RECEIVE_ERROR":
      newState = merge({}, state, action.errors);
      return newState;
    default:
      return state;
  }
};

export default uiReducer;
