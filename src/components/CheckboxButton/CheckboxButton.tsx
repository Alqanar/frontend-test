import React, { FC } from 'react';
import styles from './CheckboxButton.module.scss';

interface ICheckboxButtonProps {
  name: string;
  id: string;
}

export const CheckboxButton: FC<ICheckboxButtonProps> = function CheckboxButton({ name, id }) {
  return (
    <>
      <input className="visual-hidden" type="checkbox" name={name} id={id} />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
    </>
  );
};
