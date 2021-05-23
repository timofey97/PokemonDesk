// eslint-disable-next-line no-shadow
export enum EnumEndpoint {
  getPokemons,
  getOther,
}

interface IEndpoint {
  method: 'GET' | 'POST';
  uri: {
    pathname: string;
  };
}

export interface IConfig {
  client: {
    server: {
      protocol: string;
      host: string;
    };
    endpoint: {
      [TKey in EnumEndpoint]: IEndpoint;
    };
  };
}

export const config: IConfig = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      [EnumEndpoint.getPokemons]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
      [EnumEndpoint.getOther]: {
        method: 'GET',
        uri: {
          pathname: '/api/v1/pokemons',
        },
      },
    },
  },
};

export default config;
