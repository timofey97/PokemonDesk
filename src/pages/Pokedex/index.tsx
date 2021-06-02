/* eslint-disable camelcase */
import React, { useState } from 'react';
import cn from 'classnames';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import s from './Pokedex.module.scss';
import { EnumEndpoint } from '../../config';
import useData from '../../hook/getData';

import { Ipokemon, iPokemonData } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import PokemonCardFull from '../../components/PokemoneCardFull';

interface Iquery {
  name?: string;
  limit?: number;
}


const typeBase = [
  'Bug',
  'Dark',
  'Dragon',
  'Electric',
  'Normal',
  'Rock',
  'Fairy',
  'Fighting',
  'Fire',
  'Flying',
  'Poison',
  'Steel',
  'Ghost',
  'Glass',
  'Ground',
  'Ice',
  'Psychic',
  'Water',];

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState<Iquery>({limit: 20});
  const debouncedValue = useDebounce(searchValue, 500);
  const [modalActive, setModalActive] = useState(false);
  const [dataModal, setDataModal] = useState<Ipokemon>({} as Ipokemon);
  const [expanded, setexpanded] = useState(false)
  const [expanded2, setexpanded2] = useState(false)
const [expanded3, setexpanded3] = useState(false)


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
        <div className={s.filterBlock}>
            <div className={s.typeSelect}>
    <div className={s.selectBox} onClick={() => setexpanded(!expanded)}>
      <select>
        <option>Tipo</option>
      </select>
      <div className={s.overSelect} />
    </div>
    <div className={cn(expanded ? s.openCB : s.closeCB, s.checkboxes)}>
      {typeBase.map((typeOne)=>
      <label htmlFor={typeOne} key={typeOne}>
        <input type="checkbox" id={typeOne}/>{typeOne}</label>
      )}
    </div>
  </div>
  <div className={s.ataqueSelect}>
    <div className={s.selectBox} onClick={() => setexpanded2(!expanded2)}>
      <select>
        <option>Ataque</option>
      </select>
      <div className={s.overSelect} />
    </div>
    <div className={cn(expanded2 ? s.openCB : s.closeCB, s.FromTo)}>
        <div className={s.fromconatiner}>
          From
          <input type="text" name="from" id="from" />
        </div>
        <div className={s.arrowBtw}/>
        <div className="toconatiner">
          To
          <input type="text" name="to" id="to" />
        </div>
    </div>
  </div>
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
                onCardClick={(id: number) => {
                  const dataMa= data.pokemons.find(x => x.id ===id)
                  setDataModal(dataMa as Ipokemon); 
                  setModalActive(true);
                  
                }}
              />
            ))}
        </div>
      </Layout>
      <Footer />
      {modalActive && <PokemonCardFull data={dataModal} active={modalActive} setActive={setModalActive}/> }
      
    </div>
  );
              
};

export default React.memo(PokedexPage);


