import React from 'react';
import iconLove from './assets/icon_love.png';
import s from './Footer.module.scss';
import Heading from '../Heading';

const Footer = () => {
  return (
    <div className={s.root}>
      <Heading type="h4">Make with</Heading>
      <img className={s.icon} src={iconLove} alt="Иконка сделано с любовью" />
    </div>
  );
};

export default Footer;
