import React, { FC } from 'react';
import { Checkbox } from '../Checkbox/Checkbox';
import styles from './StatusFilter.module.scss';
import { STATUS } from '../../constans';

export const StatusFilter: FC = function StatusFilter() {
  const keys = Object.keys(STATUS) as Array<keyof typeof STATUS>;

  return (
    <section className={styles.status}>
      <h3>Status</h3>

      <ul className={styles.list}>
        {keys.map(key => (
          <li className={styles.statusFilterItem} key={key}>
            <Checkbox name={STATUS[key]} id={key} />
          </li>
        ))}
      </ul>
    </section>
  );
};
