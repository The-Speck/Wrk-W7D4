import {combineReducers} from 'redux';
import {pokemonReducer} from './pokemon_reducer';

//later we might use this below
// import {itemReducer} from './item_reducer';

export const entitiesReducer =  combineReducers(
  {
    pokemon: pokemonReducer,
  }
);

// export default entitiesReducer;
