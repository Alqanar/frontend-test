import React, { FC } from 'react';
import { IItem } from '../../types';
import styles from './ProductItem.module.scss';

interface IProductItemProps {
  item: IItem;
}

export const ProductItem: FC<IProductItemProps> = function ProductItem({ item }) {
  return (
    <li className={styles.productItem}>
      <picture>
        <img
          className={styles.image}
          src={'../asset/images/' + `${item.categoryType}` + '.jpg'}
          alt={'image of the ' + `${item.categoryType}` + ' product type'}
        />
      </picture>

      <p className={styles.type}>{item.categoryName}</p>
      {item.isLimited && <p className={`${styles.tag} ${styles.limited}`}>Limited</p>}
      {item.isNew && <p className={`${styles.tag} ${styles.new}`}>New</p>}
      <h3 className={styles.title}>{item.name}</h3>
      <p className={styles.description}>{item.description}</p>
      <p className={styles.price}>{item.price}</p>
      {item.discount && <p className={styles.discount}>{`"Discount $" + ${item.discount} +  "per bag"`}</p>}
    </li>
  );
};
