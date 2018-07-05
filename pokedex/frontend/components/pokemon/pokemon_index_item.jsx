import React from 'react';

import { Link } from 'react-router-dom';

function PokemonIndexItem(props) {
  const link = `/pokemon/${props.pokemon.id}`;
  return (<li>
            <Link to={link}>
              <h2>{props.pokemon.name}</h2>
              <img src={props.pokemon.imageUrl}></img>
            </Link>
        </li>);
}

export default PokemonIndexItem;
