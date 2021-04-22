import React, { FC, useCallback, useContext } from 'react';
import { FilterContext } from '../../contexts';
import styles from './ListError.module.scss';

export const ListError: FC = function ListError() {
  const { updateFilter, filter } = useContext(FilterContext);

  const onButtonClick = useCallback(() => {
    updateFilter({ ...filter });
  }, [updateFilter, filter]);

  return (
    <div className={styles.errorContainer}>
      <div className={styles.errorContainerText}>
        <p className={styles.errorMessage}>Something wrong happen, wonderer.</p>
        <p className={styles.errorMessage}>Please, try again somewhere in future</p>

        <button className={styles.buttonReload} onClick={onButtonClick}>
          Try again now
        </button>
      </div>
    </div>
  );
};
