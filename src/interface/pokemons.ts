/* eslint-disable camelcase */
export interface iPokemonData {
  total: number;
  pokemons: Ipokemon[];
}

const PokemonsData = {
  name_clean: 'bulbasaur',
  abilities: ['overgrow', 'chlorophyll'],
  stats: {
    hp: 45,
    attack: 49,
    defense: 49,
    'special-attack': 65,
    'special-defense': 65,
    speed: 45,
  },
  types: ['grass', 'poison'],
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
  name: 'bulbasaur',
  base_experience: 64,
  height: 7,
  id: 1,
  is_default: true,
  order: 1,
  weight: 69,
};

export type Ipokemon = typeof PokemonsData;

export interface IPokemonHook {
  data: iPokemonData;
  isLoading: boolean;
  isError: boolean;
}
