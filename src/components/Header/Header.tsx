import React, { FC } from 'react';
import { Search } from '../Search/Search';
import styles from './Header.module.scss';

interface IHeaderProps {
  title: string;
}

export const Header: FC<IHeaderProps> = function Header({ title }) {
  return (
    <header className={styles.header}>
      <div className={styles.headerWrapper}>
        <h1 className={styles.title}>{title}</h1>

        <Search />
      </div>
    </header>
  );
};
