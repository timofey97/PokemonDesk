import { useEffect, useState } from 'react';
import { EnumEndpoint } from '../config';
import { iPokemonData, IPokemonHook } from '../pages/Pokedex';
import req from '../utils/request';

const usePokemons = (endpoint: EnumEndpoint): IPokemonHook => {
  const [data, setData] = useState<iPokemonData>({} as iPokemonData);
  const [isLoading, setIsLodaing] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const getPokemons = async () => {
      setIsLodaing(true);
      try {
        const result = await req(endpoint);
        setData(result);
      } catch (e) {
        setIsError(true);
      } finally {
        setIsLodaing(false);
      }
    };

    getPokemons();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    data,
    isLoading,
    isError,
  };
};

export default usePokemons;
