import React, { FC } from 'react';
import { IItem, Status } from '../../types';
import styles from './MainContent.module.scss';
import { Filters } from '../Filters/Filters';
import { ProductList } from '../ProductList/ProductList';

interface IMainContentProps {
  items: Array<IItem>;
  status: Status;
}

export const MainContent: FC<IMainContentProps> = function MainContent({ items, status }) {
  return (
    <main className={styles.mainContent}>
      <Filters />

      <ProductList items={items} status={status} />
    </main>
  );
};
