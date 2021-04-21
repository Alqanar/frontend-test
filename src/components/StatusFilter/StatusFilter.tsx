import React, { FC, useContext, useCallback } from 'react';
import { STATUS } from '../../constans';
import { FilterContext } from '../../contexts';
import { Checkbox } from '../Checkbox/Checkbox';
import styles from './StatusFilter.module.scss';

export const StatusFilter: FC = function StatusFilter() {
  const keys = Object.keys(STATUS) as Array<keyof typeof STATUS>;

  const { filter, updateFilter } = useContext(FilterContext);

  const onClick = useCallback(
    event => {
      event.preventDefault();

      if (event.target.id === 'isLimited') {
        updateFilter({
          ...filter,
          isLimited: !filter.isLimited,
        });
      } else {
        updateFilter({
          ...filter,
          isNew: !filter.isNew,
        });
      }
    },
    [filter, updateFilter]
  );

  return (
    <section className={styles.status}>
      <h3>Status</h3>

      <ul className={styles.list}>
        {keys.map(key => (
          <li className={styles.statusFilterItem} key={key}>
            <Checkbox name={STATUS[key]} id={key} onClick={onClick} isChecked={filter[key]} />
          </li>
        ))}
      </ul>
    </section>
  );
};
