import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import { Route } from "react-router-dom";
import PokemonDetail from "./pokemon_detail_container";

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {

    const pokemonItems = this.props.pokemon.map((poke) => {
      return (<PokemonIndexItem key={poke.id} pokemon={poke}/>);
    });

    return (
      <div>
        <aside>
          <Route path="/pokemon/:id" component={PokemonDetail}/>
        </aside>
        <ul>
          {pokemonItems}
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
