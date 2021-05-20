import React from 'react';
import classNames from 'classnames';

import s from './Button.module.scss';

interface TButtonProps {
  color: 'yellow' | 'green';
  size?: 'small' | 'medium';
  fullWidth?: boolean;
  className?: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button : React.FC<TButtonProps> = ({
  children,
  onClick,
  color = 'green',
  size = 'medium',
  fullWidth,
  className,
}): React.ReactElement => (
  <button
    className={classNames(
      s.root,
      fullWidth && s.fullWidth,
      color === 'green' && s.colorGreen,
      color === 'yellow' && s.colorYellow,
      size === 'small' && s.sizeSmall,
      size === 'medium' && s.sizeMedium,
      className,
    )}
    type="button"
    onClick={onClick}
    >
    {children}
  </button>
);

export default Button;