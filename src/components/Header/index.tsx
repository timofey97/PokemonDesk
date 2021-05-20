import React from 'react'


import s from './Header.module.scss';

import { ReactComponent as Logo } from './assets/Logo.svg';


interface Imenu {
    id: number
    value: string
    link: string
}

const MENU: Imenu[] = [
    {
        id: 1,
        value: 'Home',
        link: '#',
    },
    
    {
        id: 2,
        value: 'Pokédex',
        link: '#',
    },
    {
        id: 3,
        value: 'Legendaries',
        link: '#',
    },
    {
        id: 4,
        value: 'Documentation',
        link: '#',
    },

]


const Header = () => {
    return (
        <div className={s.root}>
            <div className={s.wrap}>
                <div className={s.pokemonLogo}>
                     <Logo/> 
                </div>
                <div className={s.menuWrap}>
                    {
                        MENU.map(({id, value, link}) => (
                            <a key={id} href={link} className={s.menuLink}>
                            {value}
                        </a>
                        ))
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
