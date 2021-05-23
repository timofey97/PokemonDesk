/* eslint-disable camelcase */
import React from 'react';
import cn from 'classnames';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';
import { EnumEndpoint } from '../../config';
import usePokemons from '../../hook/getPokemons';

interface IStats {
  hp: number;
  attack: number;
  defense: number;
  'special-attack': number;
  'special-defense': number;
  speed: number;
}

interface IPokemon {
  img: string;
  name_clean: string;
  abilities: string[];
  stats: IStats;
  types: string[];
  image: string;
  name: string;
  base_experience: number;
  height: number;
  id: number;
  is_default: boolean;
  order: number;
  weight: number;
}

export interface iPokemonData {
  count: number;
  limit: number;
  offset: number;
  totalPokemons: number;
  pokemons: IPokemon[];
}

export interface IPokemonHook {
  data: iPokemonData;
  isLoading: boolean;
  isError: boolean;
}

const PokedexPage: React.FC = () => {
  const { data, isLoading, isError } = usePokemons(EnumEndpoint.getOther);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return (
      <div className={s.root}>
        <Heading type="h3" className={s.loader}>
          Something wrong!
        </Heading>
      </div>
    );
  }
  return (
    <div className={s.root}>
      <Layout>
        <Heading type="h1">
          {data?.totalPokemons} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.seachWrap}>
          <input type="text" className={s.searchInput} placeholder="Find your pokémon..." />
        </div>
        <div className={cn(s.content)}>
          {data?.pokemons.map((pokemonData: IPokemon) => (
            <PokemonCard
              name={pokemonData.name_clean}
              attack={pokemonData.stats.attack}
              defense={pokemonData.stats.defense}
              image={pokemonData.img}
              types={pokemonData.types}
              key={pokemonData.id}
            />
          ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
