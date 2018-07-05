class Api::PokemonController < ApplicationController
  def create

  end

  def index
    @pokemon = Pokemon.all
    render :index
  end

  def show
    @pokemon = Pokemon.find(params[:id])
    render :show
  end

  def poke_params
    params.require(:pokemon).permit(:name, :attack, :defense, :moves, :poke_type, :image_url)
  end
end
