import { RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from "lodash";

const defaultState = {};

export const itemsReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_POKEMON:
      newState = merge({}, state, action.item);
      return newState;
    default:
      return state;
  }
};

export default itemsReducer;
