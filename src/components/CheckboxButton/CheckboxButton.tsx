import React, { FC } from 'react';
import styles from './CheckboxButton.module.scss';

interface ICheckboxButtonProps {
  name: string;
  id: string;
  isChecked?: boolean;
  onClick?: (event: React.FormEvent<HTMLInputElement>) => void;
}

export const CheckboxButton: FC<ICheckboxButtonProps> = function CheckboxButton({
  name,
  id,
  isChecked = false,
  onClick,
}) {
  return (
    <>
      <input className="visual-hidden" type="checkbox" name={name} id={id} checked={isChecked} onChange={onClick} />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
    </>
  );
};
