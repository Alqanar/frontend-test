import React, { FC, useCallback, useContext, useEffect, useState } from 'react';
import { ICategoryItem } from '../../types';
import { CheckboxButton } from '../CheckboxButton/CheckboxButton';
import styles from './CategoriesFilter.module.scss';
import { FilterContext } from '../../contexts';

export const CategoriesFilter: FC = function CategoriesFilter() {
  const [categories, setCategories] = useState<Array<ICategoryItem>>();

  const { filter, updateFilter, resetFilter, categoryItemTypes } = useContext(FilterContext);

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

  const onClick = useCallback(
    event => {
      event.preventDefault();

      if (filter.category.includes(event.target.id)) {
        updateFilter({
          ...filter,
          category: filter.category.filter(item => item !== event.target.id),
        });

        return;
      }

      updateFilter({
        ...filter,
        category: [...filter.category, event.target.id],
      });
    },
    [filter, updateFilter]
  );

  const resetCategoryFilter = useCallback(
    event => {
      event.preventDefault();

      resetFilter();
    },
    [resetFilter]
  );

  return (
    <section className={styles.categories}>
      <h3>Category</h3>

      {categories && (
        <ul className={styles.list}>
          <li className={styles.categoryFilterItem} key="all">
            <CheckboxButton
              name="All"
              id="all"
              isChecked={!Boolean(filter.category.length) && !filter.isLimited && !filter.isNew}
              onClick={resetCategoryFilter}
            />
          </li>

          {categories.map((item: ICategoryItem) => (
            <li className={styles.categoryFilterItem} key={item.id}>
              <CheckboxButton
                name={item.name}
                id={item.id}
                isChecked={filter.category.includes(item.id)}
                isDisabled={!categoryItemTypes.includes(item.type)}
                onClick={onClick}
              />
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};
