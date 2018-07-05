@pokemon.each do |passingPokemon|
  json.set! passingPokemon.id do
    json.extract! passingPokemon, :id, :name
    json.imageUrl asset_path(passingPokemon.image_url)
  end
end
