import { Dispatch } from 'react';
import { IInitialState } from '.';
import { EnumEndpoint } from '../config';
import { ITypesRequest, IStateRequest } from '../interface/pokemons';
import req from '../utils/request';

export enum PokemonsActionTypes {
  FETCH_TYPES = 'FETCH_TYPES',
  FETCH_TYPES_RESOLVE = 'FETCH_TYPES_RESOLVE',
  FETCH_TYPES_REJECT = 'FETCH_TYPES_REJECT',
}

interface TypeAction {
  type: PokemonsActionTypes;
  payload?: string[];
}

type ActionTypes = TypeAction;

export interface IPokemonsInitialState {
  types: IStateRequest<string>;
}

const initialState: IPokemonsInitialState = {
  types: {
    isLoading: false,
    data: null,
    error: null,
  },
};

const pokemons = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case PokemonsActionTypes.FETCH_TYPES:
      return {
        ...state,
        types: {
          isLoading: true,
          data: null,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_RESOLVE:
      return {
        ...state,
        types: {
          isLoading: false,
          data: action.payload,
          error: null,
        },
      };
    case PokemonsActionTypes.FETCH_TYPES_REJECT:
      return {
        ...state,
        types: {
          isLoading: false,
          data: null,
          error: action.payload,
        },
      };
    default:
      return state;
  }
};

export const getPokemonTypes = (state: IInitialState) => state.pokemons.types.data;
export const getPokemonTypesLoading = (state: IInitialState) => state.pokemons.types.isLoading;

export const getTypesAction = () => {
  return async (dispatch: Dispatch<ActionTypes>) => {
    dispatch({ type: PokemonsActionTypes.FETCH_TYPES });
    try {
      const response = await req<ITypesRequest>(EnumEndpoint.getPokemonTypes, {});
      dispatch({ type: PokemonsActionTypes.FETCH_TYPES_RESOLVE, payload: response });
    } catch (error) {
      dispatch({
        type: PokemonsActionTypes.FETCH_TYPES_REJECT,
        payload: error,
      });
    }
  };
};


export default pokemons;
