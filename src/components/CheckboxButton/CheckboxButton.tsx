import React, { FC, ChangeEvent } from 'react';
import styles from './CheckboxButton.module.scss';

interface ICheckboxButtonProps {
  name: string;
  id: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onClick?: (event: ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxButton: FC<ICheckboxButtonProps> = function CheckboxButton({
  name,
  id,
  isChecked = false,
  isDisabled = false,
  onClick,
}) {
  return (
    <>
      <input
        className="visual-hidden"
        type="checkbox"
        name={name}
        id={id}
        checked={isChecked}
        disabled={isDisabled}
        onChange={onClick}
      />
      <label className={styles.label} htmlFor={id}>
        {name}
      </label>
    </>
  );
};
