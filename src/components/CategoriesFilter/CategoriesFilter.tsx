import React, { FC, useEffect, useState } from 'react';
import { ICategoryItem } from '../../types';
import { CheckboxButton } from '../CheckboxButton/CheckboxButton';
import styles from './CategoriesFilter.module.scss';
// import { STATUS } from '../../constans';

export const CategoriesFilter: FC = function CategoriesFilter() {
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
    <section className={styles.categories}>
      <h3>Category</h3>

      {categories && (
        <ul className={styles.list}>
          {categories.map((item: ICategoryItem) => (
            <li className={styles.categoryFilterItem} key={item.id}>
              <CheckboxButton name={item.name} id={item.id} />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
