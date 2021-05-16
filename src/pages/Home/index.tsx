import React from 'react'
import cn from 'classnames';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Parallax from './components/Parallax';


import s from './Home.module.scss';

const HomePage = () => {
    return (
        <div className={s.root}>
            <Header/>
            <Layout className={s.contentWrap}>
                <div className={s.contentText}>
                    <h1 className={s.title}>
                        <b>Find</b> all your favorite <b>Pokemon</b>
                    </h1>
                    <p className={s.text}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>
                    <Button
                    color="green" 
                    onClick={()=>console.log('Click')}>
                    See pokemons
                </Button>
                </div>
                
                <div className={s.home__parallax}>
                    <Parallax />
                    <div className={s.text_love}>
                        Make with ❤️
                        </div>

                </div>
            </Layout>
        </div>
    );
};

export default HomePage;
