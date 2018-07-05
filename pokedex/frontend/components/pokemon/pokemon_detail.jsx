import React from 'react';
// import requestPokemon from '../actions/pokemon_actions';

class PokemonDetail extends React.Component {
  componentDidMount() {
    this.props.requestPokemon(this.props.match.params.id);
  }

  componentWillReceiveProps(newProps) {
    const idString = parseInt(this.props.match.params.id);
    if (idString !== newProps.pokemon.id) {
      this.props.requestPokemon(newProps.pokemon.id);
    }
  }

  render() {
    if (!this.props.pokemon) return null;
    if (!this.props.pokemon.moves) return null;

    const { name, type, attack, defense, moves} = this.props.pokemon;
    return (
      <div>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <h2>{attack}</h2>
        <h2>{defense}</h2>
        <h2>{moves.join(", ")}</h2>
      </div>
    );
  }
}

export default PokemonDetail;
