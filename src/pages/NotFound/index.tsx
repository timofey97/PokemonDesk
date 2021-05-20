import React from 'react';
import { navigate } from 'hookrouter';

import s from './NotFound.module.scss';
import Button from '../../components/Button';
import TeamRocket from './assets/Team_Rocket_trio_OS 1.png';
import { LinkEnum } from '../../routes';

const NotFoundPage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrap}>
        <div className={s.text}>404</div>
        <div className={s.layer}>
          <img src={TeamRocket} alt="TeamRocket" />
          <div className={s.back}>
            <div className={s.subTitle}>
              <span>The rocket team</span> has won this time.
            </div>
            <Button onClick={() => navigate(LinkEnum.HOME)} size="medium" color="yellow">
              Return
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
