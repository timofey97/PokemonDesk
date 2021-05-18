import React from 'react';
import { navigate } from 'hookrouter';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Layout from '../../components/Layout';
import Parallax from './components/Parallax';

import s from './Home.module.scss';
import Heading from '../../components/Heading';
import Footer from '../../components/Footer';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <Header />
      <Layout className={s.contentWrap}>
        <div className={s.contentText}>
          <Heading type="h1">
            <b>Find</b> all your favorite <b>Pokemon</b>
          </Heading>

          <Heading type="h3">You can know the type of Pokemon, its strengths, disadvantages and abilities</Heading>
          <Button color="green" onClick={() => navigate(LinkEnum.POKEDEX)}>
            See pokemons
          </Button>
        </div>

        <div className={s.home__parallax}>
          <Parallax />
        </div>
      </Layout>
      <Footer />
    </div>
  );
};

export default HomePage;
