/* eslint-disable camelcase */
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames';

import Footer from '../../components/Footer';
import Layout from '../../components/Layout';
import PokemonCard from '../../components/PokemonCard';
import Heading from '../../components/Heading';

import { getPokemonTypes, getPokemonTypesLoading, getTypesAction } from '../../store/pokemon';

import s from './Pokedex.module.scss';
import { EnumEndpoint } from '../../config';
import useData from '../../hook/getData';

import { Ipokemon, iPokemonData } from '../../interface/pokemons';
import useDebounce from '../../hook/useDebounce';
import PokemonCardFull from '../../components/PokemoneCardFull';
import DropdownMenu from '../../components/DropDownFilterTypes';
import Slider from '../../components/Slider';
import { ReactComponent as Loading } from './assets/Loading.svg';

interface Iquery {
  name?: string;
  limit?: number;
}

const PokedexPage: React.FC = () => {
  const dispatch = useDispatch();
  const typesPokemons = useSelector(getPokemonTypes);
  const isTypingLoading = useSelector(getPokemonTypesLoading);
  const [searchValue, setSearchValue] = useState('');
  const [typeValue, setTypeValue] = useState<string>('');
  const [query, setQuery] = useState<Iquery>({ limit: 100 });

  const [modalActive, setModalActive] = useState(false);
  const [dataModal, setDataModal] = useState<Ipokemon>({} as Ipokemon);

  
  const [attackMinValue, setAttackMinValue] = useState<number>(0);
  const [attackMaxValue, setAttackMaxValue] = useState<number>(200);
  const [stateDropdownMenu, setStateDropdownMenu] = useState<boolean>(false);
  const [stateSlider, setStateSlider] = useState<boolean>(false);
  const debouncedValue = useDebounce(searchValue || typeValue || attackMinValue || attackMaxValue , 500);

  const { data, isLoading, isError } = useData<iPokemonData>(EnumEndpoint.getPokemons, query, [debouncedValue]);
const [typesArray, setTypesArray] = useState(new Map());

  const hadleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((state: Iquery) => ({
      ...state,
      name: e.target.value,
    }));
  };
 console.log(attackMinValue)

  const sliderAttackData = {
    min: 0,
    max: 200,
    step: 1,
    value: { min: attackMinValue, max: attackMaxValue },
    label: 'Ataque',
  };

  const toggleHandler = (type: string, stateD: boolean) => {
    console.log(type)
    if (typesArray.has(type)) {
      typesArray.delete(type);
      setTypesArray(new Map(typesArray));
    } else {
      setTypesArray(new Map(typesArray.set(type, '')));
    }
    console.log(typesArray)
    if (typeValue === type) {setTypeValue('')}
    else {setTypeValue(type);}
    setStateDropdownMenu(stateD);

    const types = Array.from(typesArray.keys()).join('|');
    console.log(types)
    setQuery((state: Iquery) => ({
      ...state,
      types,
    }));
  };

  useEffect(() => {
    dispatch(getTypesAction());
  }, []);

  const attackHandler = (dataa: any, stateS: boolean) => {
    let { min, max } = dataa
    if (min < 0) min = 0;
    if (max > 200) max = 200;
    setAttackMinValue(min);
    setAttackMaxValue(max);
    setStateSlider(stateS);

    setQuery((state: Iquery) => ({
      ...state,
      attack_from: min,
      attack_to: max,
    }));
    console.log(query)
  };

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
          {!isTypingLoading && <DropdownMenu types={typesPokemons} onToggle={toggleHandler} isActiveMenu={stateDropdownMenu} />}
          <Slider data={sliderAttackData} onChange={attackHandler}  isActiveMenu={stateSlider}/>
        </div>
        <div className={cn(s.content)}>
          {/* {isLoading ? (
            <Loading className={s.loader} />
          ) : ( */
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
                  const dataMa = data.pokemons.find((x) => x.id === id);
                  setDataModal(dataMa as Ipokemon);
                  setModalActive(true);
                }}
              />
            ))
          }
        </div>
      </Layout>
      <Footer />
      {modalActive && <PokemonCardFull data={dataModal} active={modalActive} setActive={setModalActive} />}
    </div>
  );
};

export default React.memo(PokedexPage);
