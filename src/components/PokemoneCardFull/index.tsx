import React from 'react';
import cn from 'classnames';

import s from './PokemoneCardFull.module.scss';
import useData from '../../hook/getData';
import { Ipokemon } from '../../interface/pokemons';
import { EnumEndpoint } from '../../config';
import ProgressBar from '../ProgressBar';

export interface PokemonProps {
  id: string | number;
}

const PokemonCardFull: React.FC<PokemonProps> = ({ id = '1050' }) => {
  const { data, isLoading } = useData<Ipokemon | null>(EnumEndpoint.getPokemon, { id });

  // eslint-disable-next-line no-shadow
  const ucFirst = (s: any) => s[0].toUpperCase() + s.slice(1);

  const styleElem = document.head.appendChild(document.createElement('style'));

  styleElem.innerHTML = '#theDiv:before {background: black;}';

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    <div class={s.overlay}> </div>
    <div className={cn(s.root,  s[data?.types[0] as keyof typeof s])}>
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
          <div className={s.namewrap}>{ucFirst(data?.name_clean)}</div>
          <div className={s.generationWrap}>Generation 1</div>
          <div className={s.generationValue}>{data?.weight}</div>
        </div>
        <div className={s.abilityWrap}>
          Abilities
          <div className={s.abilityValue}>
            {' '}
            {ucFirst(data?.abilities[0])} - {ucFirst(data?.abilities[1])}{' '}
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
            {/* <div className={s.expProgress}  /> */}
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
    </>
  );
  
};

export default PokemonCardFull;
