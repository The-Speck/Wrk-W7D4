import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import {merge} from "lodash";

const defaultState = {};

export const pokemonReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;

  switch (action.type) {
    case RECEIVE_ALL_POKEMON:
      newState = merge({}, action.pokemon, state);
      return newState;
    case RECEIVE_POKEMON:
      // debugger
      newState = merge({}, state, { [action.pokemon.id]: action.pokemon });
      return newState;
    default:
      return state;
  }
};

export default pokemonReducer;
