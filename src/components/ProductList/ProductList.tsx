import React, { FC } from 'react';
import { IItem } from '../../types';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';
import { useProductList } from './useProductList';
import { Filters } from '../Filters/Filters';

export const ProductList: FC = function ProductList() {
  const { items, filter, status, updateFilter } = useProductList();

  const handleFilterIsNewUpdate = () => updateFilter({ isNew: !filter.isNew });

  return (
    <main className={styles.mainContent}>
      <Filters />

      <div>
        <label htmlFor="is_new">Is new</label>
        <input id="is_new" type="checkbox" onChange={handleFilterIsNewUpdate} checked={filter.isNew} />
      </div>

      <div>Status: {status}</div>

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
