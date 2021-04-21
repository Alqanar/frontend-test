import React, { FC } from 'react';
import styles from './Filters.module.scss';
import { CategoriesFilter } from '../CategoriesFilter/CategoriesFilter';

export const Filters: FC = function Filters() {
  return (
    <section className={styles.filters}>
      <h2 className={styles.sectionTitle}>Filters</h2>

      <div className={styles.filtersWrapper}>
        <CategoriesFilter />
      </div>
    </section>
  );
};
