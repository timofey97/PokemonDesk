import { combineReducers } from 'redux';
import pokemons, { IPokemonsInitialState } from './pokemon';
import app from './app';

export interface IInitialState {
  pokemons: IPokemonsInitialState;
}

const createRootReducer = () =>
  combineReducers({
    app,
    pokemons,
  });
export default createRootReducer;
