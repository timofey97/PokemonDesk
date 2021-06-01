import { EnumEndpoint } from "../config";
import getUrlWithParamsConfig from "./getUrlWithParamsConfig";

describe('getUrlWithParamsConfig', ()=> {
    test('Должна принимать два аргумента "getPokemons" b пустой обьект, на выходе получить один готовый обект с url', () => {
        const url = getUrlWithParamsConfig (EnumEndpoint.getPokemons, {})

        expect(url).toEqual({
             protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {}
        }
        )
    });
    test('Должна принимать два аргумента "getPokemon" и { id: 25}, на выходе получить один готовый объект с полям pathname, host, и query', () => {
        const url = getUrlWithParamsConfig (EnumEndpoint.getPokemon, {id: 25})

        expect(url).toEqual({
             protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {}
        }
        )
    });
      test('Должна принимать два аргумента "getPokemons" и { name: "Pikachu" }, на выходе получить объект с полями pathname, protocol, host и полем name равным Pikachu', () => {
    const url = getUrlWithParamsConfig(EnumEndpoint.getPokemons, { name: 'Pikachu' });

    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: {
        name: 'Pikachu',
      },
    });
  });
})