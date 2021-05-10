import React, { FC } from 'react';
import { IItem, Status } from '../../types';
import { CardSkeleton } from '../CardSkeleton/CardSkeleton';
import { ProductItem } from '../ProductItem/ProductItem';
import styles from './ProductList.module.scss';
import { ListError } from '../ErrorMessage/ErrorMessage';

interface IProductListProps {
  items: Array<IItem>;
  status: Status;
}

const SKELETONS_COUNT = 6;

const getListItem = (items: Array<IItem>, status: Status) => {
  if (status === Status.ERROR) {
    return <ListError />;
  }

  let listItems: React.ReactNode[] = [];

  if (status === Status.WORK) {
    for (let i = 0; i < SKELETONS_COUNT; i++) {
      listItems.push(<CardSkeleton key={i} />);
    }
  } else if (status === Status.SUCCESS) {
    if (Boolean(items.length)) {
      listItems = items.map((item: IItem) => <ProductItem key={item.id} item={item} />);
    } else {
      return <p className={styles.noGoods}>No products were found by the set of filters</p>;
    }
  }

  return <ul className={styles.itemsContainer}>{listItems}</ul>;
};

export const ProductList: FC<IProductListProps> = function ProductList({ items, status }) {
  return (
    <section className={styles.productList}>
      <h2 className="visual-hidden">List of goods</h2>

      {getListItem(items, status)}
    </section>
  );
};
