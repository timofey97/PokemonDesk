import React from 'react';
import cn from 'classnames';
import Heading from '../Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCardProps {
  name: string;
  attack: string | number;
  defense: string | number;
  types: string[];
  image: string;
}

const PokemonCard: React.FC<IPokemonCardProps> = ({ name, attack, defense, types, image }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading type="h4" margin className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type) => (
            <span key={type} className={cn(s.label, s[type as keyof typeof s])}>
              {type}
            </span>
          ))}
          <span className={s.label}>Fire</span>
        </div>
      </div>
      <div className={cn(s.pictureWrap, s[types[0] as keyof typeof s])}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
