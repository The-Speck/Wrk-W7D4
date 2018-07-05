export const fetchAllPokemon = () => {
  return $.ajax (
    {
      method: 'get',
      url: '/api/pokemon/'
    }
  );
};

export const fetchPokemon = (pokemonId) => {
  return $.ajax (
    {
      method: 'get',
      url: `/api/pokemon/${pokemonId}`
    }
  );
};
