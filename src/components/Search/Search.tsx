import React, { FC } from 'react';
import styles from './Search.module.scss';

export const Search: FC = function Search() {
  return (
    <>
      <input
        className={styles.search}
        type="search"
        id="site-search"
        name="search"
        placeholder="Search among products"
        aria-label="Search through site content"
      />
    </>
  );
};
