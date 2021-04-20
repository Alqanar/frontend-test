import React, { FC, useEffect, useState } from 'react';
import { ICategoryItem } from '../../types';
import { CheckboxButton } from '../CheckboxButton/CheckboxButton';
import styles from './Filters.module.scss';

export const Filters: FC = function Filters() {
  const [categories, setCategories] = useState<Array<ICategoryItem>>();

  useEffect(() => {
    fetch('/api/category')
      .then(res => {
        if (!res.ok || res.status !== 200) {
          throw new Error(`Request failed with status code ${res.status}`);
        }
        return res.json();
      })
      .then(data => setCategories(data))
      .catch(err => {
        console.error(err);
      });
  }, []);

  return (
    <section className={styles.filters}>
      <h2 className={styles.sectionTitle}>Filters</h2>

      <section className={styles.categories}>
        <h3 className={styles.additionalTitle}>Category</h3>

        {categories && (
          <ul className={styles.list}>
            {categories.map((item: ICategoryItem) => (
              <CheckboxButton key={item.id} category={item} />
            ))}
          </ul>
        )}
      </section>
    </section>
  );
};
