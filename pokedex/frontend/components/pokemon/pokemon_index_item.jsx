import React from 'react';

function PokemonIndexItem(props) {
  // debugger
  return <li><h2>{props.pokemon.name}</h2> <img src={props.pokemon.imageUrl}></img></li>;
}

export default PokemonIndexItem;
