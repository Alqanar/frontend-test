import React, { FC, ChangeEvent } from 'react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
  name: string;
  id: string;
  isChecked?: boolean;
  onClick?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const Checkbox: FC<ICheckboxProps> = function Checkbox({ name, id, isChecked, onClick }) {
  return (
    <>
      <input className="visual-hidden" type="checkbox" name={name} id={id} checked={isChecked} onChange={onClick} />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
    </>
  );
};
