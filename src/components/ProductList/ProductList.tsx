import React, { FC } from 'react';
import { IItem } from '../../types';
import styles from './ProductList.module.scss';
import { useProductList } from './useProductList';
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductList: FC = function ProductList() {
  const { items, filter, status, updateFilter } = useProductList();

  const handleFilterIsNewUpdate = () => updateFilter({ isNew: !filter.isNew });

  return (
    <main className={styles.mainContent}>
      <div className={styles.filtersContainer}>
        <div>Filters placeholder</div>

        <div>
          <label htmlFor="is_new">Is new</label>
          <input id="is_new" type="checkbox" onChange={handleFilterIsNewUpdate} checked={filter.isNew} />
        </div>
      </div>

      <div>Status: {status}</div>

      <ul className={styles.itemsContainer}>
        {items.map((item: IItem) => (
          <ProductItem key={item.id} item={item} />
        ))}
      </ul>
    </main>
  );
};
