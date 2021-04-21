import React, { FC, useMemo } from 'react';
import { IItem } from '../../types';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';
import { useProductList } from './useProductList';
import { Filters } from '../Filters/Filters';
import { FilterContext } from '../../contexts';

export const ProductList: FC = function ProductList() {
  const { items, filter, status, updateFilter, resetFilter } = useProductList();
  const filterContextData = useMemo(() => ({ filter, updateFilter, resetFilter }), [filter, updateFilter, resetFilter]);

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
