/* eslint-disable camelcase */
import React, { useState } from 'react';
import cn from 'classnames';
import { navigate } from 'hookrouter';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';
import { EnumEndpoint } from '../../config';
import useData from '../../hook/getData';

import { Ipokemon, iPokemonData } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';

interface Iquery {
  name?: string;
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<Iquery>({});
  const debouncedValue = useDebounce(searchValue, 500);

  const { data, isLoading, isError } = useData<iPokemonData>(EnumEndpoint.getPokemons, query, [debouncedValue]);

  const hadleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: Iquery) => ({
      ...state,
      name: e.target.value,
    }));
  };

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

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
          {!isLoading && data?.total} <b>Pokemons</b> for you to choose your favorite
        </Heading>
        <div className={s.seachWrap}>
          <input
            type="text"
            className={s.searchInput}
            placeholder="Find your pokémon..."
            value={searchValue}
            onChange={hadleSearchChange}
          />
        </div>
        <div className={cn(s.content)}>
          {!isLoading &&
            data?.pokemons.map((pokemonData: Ipokemon) => (
              <PokemonCard
                name={pokemonData.name_clean}
                attack={pokemonData.stats.attack}
                defense={pokemonData.stats.defense}
                image={pokemonData.img}
                types={pokemonData.types}
                key={pokemonData.id}
                pr={pokemonData.id}
                onCardClick={(id: number) => navigate(`/pokedex/${id}`, false)}
              />
            ))}
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default PokedexPage;
