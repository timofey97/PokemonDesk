/* eslint-disable no-shadow */
import React, { PropsWithChildren } from 'react';
import Pokedex from './pages/Pokedex';
import HomePage from './pages/Home';
// import PokemonCardFull, { PokemonProps } from './components/PokemoneCardFull';

interface IGeneralMenu {
  title: string;
  link: LinkEnum;
  component: (props: PropsWithChildren<any>) => JSX.Element;
}

export enum LinkEnum {
  HOME = '/',
  POKEDEX = '/pokedex',
  LEGENDARIES = '/legendaries',
  DOCUMENTATION = '/documentation',
  // POKEMON = '/pokedex/:id',
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: LinkEnum.HOME,
    component: () => <HomePage />,
  },

  {
    title: 'Pokédex',
    link: LinkEnum.POKEDEX,
    component: () => <Pokedex />,
  },
  {
    title: 'Legendaries',
    link: LinkEnum.LEGENDARIES,
    component: () => <Pokedex />,
  },
  {
    title: 'Documentation',
    link: LinkEnum.DOCUMENTATION,
    component: () => <Pokedex />,
  },
  // {
  //   title: 'Pokemon',
  //   link: LinkEnum.POKEMON,
  //   component: ({ id }: PokemonProps) => <PokemonCardFull id={id} />,
  // },
];

interface IAccMenu {
  [n: string]: (props: PropsWithChildren<any>) => JSX.Element;
}

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item: IGeneralMenu) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
