import React, { FC } from 'react';
import { IItem } from '../../types';
import { ItemImage } from '../ItemImage/ItemImage';
import styles from './ProductItem.module.scss';
import { STATUS } from '../../constans';

interface IProductItemProps {
  item: IItem;
}

const addZero = (price: number): string => {
  const priceInString = String(price);

  if (priceInString.includes('.')) {
    if (priceInString.split('.')[1].length === 1) {
      return `${priceInString}0`;
    }

    return priceInString;
  }

  return `${priceInString}.00`;
};

export const ProductItem: FC<IProductItemProps> = function ProductItem({ item }) {
  return (
    <li className={styles.productItem}>
      <ItemImage type={item.categoryType} />

      <div className={styles.infoWrapper}>
        <div className={styles.additionalInfo}>
          <p className={styles.type}>{item.categoryName}</p>

          {/* в данном месте, если бы у нас был массив тегов, то следовало делать список (ul) c динамическими элементами списка (li), но так как данные предусматривают или new и/или limited или тегов нет, то реализую без списка и без поддержки переполнения контейнера */}
          {item.isLimited && <p className={`${styles.tag} ${styles.limited}`}>{STATUS.isLimited}</p>}
          {item.isNew && <p className={`${styles.tag} ${styles.new}`}>{STATUS.isNew}</p>}
        </div>

        <h3 className={styles.title}>{item.name}</h3>

        <p className={styles.description}>{item.description}</p>

        {item.discount ? (
          <div className={styles.priceWrapper}>
            <p className={styles.price}>{`$${addZero(item.price)}`}</p>
            {item.discount && <p className={styles.discount}>{`Discount $${item.discount}  per bag`}</p>}
          </div>
        ) : (
          <p className={styles.price}>{`$${addZero(item.price)}`}</p>
        )}
      </div>
    </li>
  );
};
