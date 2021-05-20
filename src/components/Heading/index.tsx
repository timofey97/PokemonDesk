import React from 'react';
import cn from 'classnames';

import s from './Heading.module.scss';

interface HeadingProps {
  type: string | undefined;
  className?: string | undefined;
  margin?: boolean;
}

const Heading: React.FC<HeadingProps> = ({ type = 'h1', margin = false, children, className, ...props }) => {
  return React.createElement(
    `${type}`,
    {
      className: cn(
        className,
        // @ts-ignore
        s[type],
        { [s.marginon]: margin },
      ),
      ...props,
    },
    children,
  );
};

export default Heading;
