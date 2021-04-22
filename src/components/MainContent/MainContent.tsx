import React, { FC, useEffect, useMemo, useState } from 'react';
import { IItem } from '../../types';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './MainContent.module.scss';
import { useProductList } from './useProductList';
import { Filters } from '../Filters/Filters';
import { FilterContext } from '../../contexts';

const categoryItemTypes: Set<string> = new Set();

export const MainContent: FC = function MainContent() {
  const { items, filter, status, updateFilter, resetFilter } = useProductList();
  const [categoryItemTypesArray, setCategoryItemTypesArray] = useState<Array<string>>([]);

  useEffect(() => {
    if (categoryItemTypes.size > 0) {
      return;
    }

    for (let i = 0; i < items.length; i++) {
      categoryItemTypes.add(items[i].categoryType);
    }

    setCategoryItemTypesArray(Array.from(categoryItemTypes));
  }, [items]);

  const filterContextData = useMemo(
    () => ({ filter, updateFilter, resetFilter, categoryItemTypes: categoryItemTypesArray }),
    [filter, updateFilter, resetFilter, categoryItemTypesArray]
  );

  return (
    <main className={styles.mainContent}>
      <FilterContext.Provider value={filterContextData}>
        <Filters />
      </FilterContext.Provider>

      <div>
        <div>Status: {status}</div>
      </div>

      <section>
        <h2 className="visual-hidden">List of goods</h2>

        <ul className={styles.itemsContainer}>
          {items.map((item: IItem) => (
            <ProductItem key={item.id} item={item} />
          ))}
        </ul>
      </section>
    </main>
  );
};
