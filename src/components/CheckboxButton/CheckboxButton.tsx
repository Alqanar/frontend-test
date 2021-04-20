import React, { FC } from 'react';
import styles from './CheckboxButton.module.scss';
import { ICategoryItem } from '../../types';

interface ICheckboxButtonProps {
  category: ICategoryItem;
}

export const CheckboxButton: FC<ICheckboxButtonProps> = function CheckboxButton({ category }) {
  return (
    <>
      <input className="visual-hidden" type="checkbox" name={category.name} id={category.id} />
      <label className={styles.label} htmlFor={category.id}>
        {category.name}
      </label>
    </>
  );
};
