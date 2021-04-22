import React, { FC } from 'react';
import { IItem, Status } from '../../types';
import { CardSkeleton } from '../CardSkeleton/CardSkeleton';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';
import { ListError } from '../ListError/ListError';

interface IProductListProps {
  items: Array<IItem>;
  status: Status;
}

const getListItem = (items: Array<IItem>, status: Status) => {
  if (status === Status.ERROR) {
    return <ListError />;
  } else {
    let listItems: React.ReactNode[] = [];

    if (status === Status.WORK) {
      for (let i = 0; i < 6; i++) {
        listItems.push(
          <li key={i}>
            <CardSkeleton />
          </li>
        );
      }
    } else if (status === Status.SUCCESS) {
      listItems = items.map((item: IItem) => <ProductItem key={item.id} item={item} />);
    }

    return <ul className={styles.itemsContainer}>{listItems}</ul>;
  }
};

export const ProductList: FC<IProductListProps> = function ProductList({ items, status }) {
  return (
    <section className={styles.productList}>
      <h2 className="visual-hidden">List of goods</h2>

      {getListItem(items, status)}
    </section>
  );
};
