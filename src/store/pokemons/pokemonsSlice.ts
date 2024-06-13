import { SimplePokemon } from '@/pokemons';
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface FavoritePokemon {
  favorites: {[key: string]: SimplePokemon}
}

const initialState:FavoritePokemon = {
  favorites: {}
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons(state, action:PayloadAction<{[key: string]: SimplePokemon}>){
      state.favorites = action.payload
    },
    
    toggleFavorite(state, action:PayloadAction<SimplePokemon>){
      const pokemon = action.payload;
      const { id } = pokemon;

      if (state.favorites[id] !== undefined) {
        delete state.favorites[id];
      } else { 
        state.favorites[id] = pokemon
      }
      
      localStorage.setItem('favoritePokemons', JSON.stringify(state.favorites));

    }
  }
});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer