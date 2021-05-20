import React from 'react';
import classNames from 'classnames';

import style from './Layout.module.scss';

interface LayoutProps {
  className?: string;
}

const Layout: React.FC<LayoutProps> = ({ children, className = null }) => (
  <div className={classNames(style.root, className)}>{children}</div>
);

export default Layout;