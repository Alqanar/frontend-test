import React, { FC } from 'react';
import styles from './Checkbox.module.scss';

interface ICheckboxProps {
  name: string;
  id: string;
}

export const Checkbox: FC<ICheckboxProps> = function Checkbox({ name, id }) {
  return (
    <>
      <input className="visual-hidden" type="checkbox" name={name} id={id} />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
    </>
  );
};
