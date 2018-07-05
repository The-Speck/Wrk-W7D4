json.pokemon do
  json.extract! @pokemon, :id, :name, :attack, :defense, :moves
  json.type @pokemon.poke_type
  json.imageUrl asset_path(@pokemon.image_url)
  json.itemsIds @pokemon.items.ids
end
json.items do
  @pokemon.items.each do |item|
    json.set! item.id do
      json.extract! item, :id, :name, :pokemon_id, :price, :happiness
      json.imageUrl asset_path(item.image_url)
    end
  end
end
