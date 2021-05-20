import React from 'react';
import classnames from 'classnames';

import s from './Heading.module.scss';

interface HeadingInterface {
  type: HeaderType;
}

export enum HeaderType {
  h1 = 'h1',
  h2 = 'h2',
  h3 = 'h3',
  h4 = 'h4',
  h5 = 'h5',
  h6 = 'h6',
}



const Heading: React.FC<HeadingInterface> = ({ type, children }) => {
  function getHeaderComponent() {
    switch (type) {
      case HeaderType.h1:
        return <h1 className={classnames(s.h1)}>{children}</h1>;
      case HeaderType.h2:
        return <h2 className={classnames(s.h2)}>{children}</h2>;
      case HeaderType.h3:
        return <h3 className={classnames(s.h3)}>{children}</h3>;
      case HeaderType.h4:
        return <h4 className={classnames(s.h4)}>{children}</h4>;
      case HeaderType.h5:
        return <h5 className={classnames(s.h5)}>{children}</h5>;
      case HeaderType.h6:
        return <h6 className={classnames(s.h6)}>{children}</h6>;
      default:
        return <h1 className={classnames(s.h1)}>{children}</h1>;
    }
  }

  return getHeaderComponent();
};

export default Heading;