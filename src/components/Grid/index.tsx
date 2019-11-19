// modules
import * as React from 'react';
import cx from 'classnames';

// local
import styles from './Grid.module.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Grid: React.FC<Props> = ({ children, className }) => (
  <div className={ cx(styles.grid, className) }>
    { children }
  </div>
);

export default Grid;
