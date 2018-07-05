import React from 'react';
import { connect } from 'react-redux';
import PokemonDetail from './pokemon_detail';
import { requestPokemon } from '../../actions/pokemon_actions';

const mapStateToProps = (state = {}, ownProps) => {
  // debugger
  const pokemon = state.entities.pokemon[ownProps.match.params.id];
  return {
    pokemon
  };
};


const mapDispatchToProps = (dispatch) => {
  return { requestPokemon: (pokemonId) => {
      dispatch(requestPokemon(pokemonId));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);
