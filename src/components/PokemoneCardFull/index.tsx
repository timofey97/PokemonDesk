import React from 'react';
import cn from 'classnames';

import s from './PokemoneCardFull.module.scss';
import { Ipokemon } from '../../interface/pokemons';
import ProgressBar from '../ProgressBar';
import toCapitalizeFirstLetter from '../../utils/toCapitalizeFirstLetter';

export interface PokemonProps {
  data:  Ipokemon;
  active: boolean | null;
  setActive: any;
}

const PokemonCardFull: React.FC<PokemonProps> = ({ data, active, setActive}) => {


  return (
    <div role='button' 
    tabIndex={0}
    className={active ? cn(s.overlay, s.active) : s.overlay} 
    onClick={() => setActive(false)}
    onKeyDown={() => setActive(false)}> 
    <div 
    role='button'
    tabIndex={0}
     className={cn(s[data?.types[0] as keyof typeof s], active ? cn(s.root, s.active) : s.root)}
    onClick={e => e.stopPropagation()}
    onKeyDown={e => e.stopPropagation()}>
      <div className={cn(s.leftSide)}>
        <div className={cn(s.labelWrap)}>
          {data?.types.map((type: string) => (
            <span key={type} className={cn(s.label, s[type as keyof typeof s])}>
              {type}
            </span>
          ))}
        </div>
        <div className={cn(s.pictureWrap)}>
          <img src={data?.img} alt={data?.name_clean} />
        </div>
      </div>

      <div className={s.rightSide}>
        <div className={s.titleWrap}>
          <div className={s.namewrap}>{toCapitalizeFirstLetter(data?.name_clean)}</div>
          <div className={s.generationWrap}>Generation 1</div>
          <div className={s.generationValue}>{data?.weight}</div>
        </div>
        <div className={s.abilityWrap}>
          Abilities
          <div className={s.abilityValue}>
            {' '}
            {(data?.abilities[0])} - {(data?.abilities[1])}{' '}
          </div>
        </div>
        <div className={s.helthyandexpWrap}>
          <div className={s.heathyPointsItem}>
            Healthy Points
            <div className={s.heathyValue}>{data?.stats.hp}</div>
            <ProgressBar bgcolor="#64D368" completed={data?.stats.hp} />
            {/* <div className={s.hpProgress} /> */}
          </div>
          <div className={s.experienceItem}>
            Experience
            <div className={s.ExperienceValue}>{data?.base_experience}</div>
            <ProgressBar bgcolor="#F5DB13" completed={data?.base_experience} />
          </div>
        </div>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{data?.stats.defense}</div>
            Defense
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{data?.stats.attack}</div>
            Attack
          </div>

          <div className={s.statItem}>
            <div className={s.statValue}>{data?.stats['special-attack']}</div>
            Sp Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{data?.stats['special-defense']}</div>
            Sp Defense
          </div>
        </div>
      </div>
    </div>
    </div>

  );
  
};

export default React.memo(PokemonCardFull);
