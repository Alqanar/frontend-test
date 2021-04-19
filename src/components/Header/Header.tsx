import React, { FC } from 'react';
import styles from './Header.module.scss';

interface IHeaderProps {
  title: string;
  children?: React.ReactNode;
}

export const Header: FC<IHeaderProps> = function Header({ title, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.title}>{title}</h1>
        {children}
      </div>
    </header>
  );
};
