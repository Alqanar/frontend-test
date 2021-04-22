import React, { FC } from 'react';
import styles from './CardSkeleton.module.scss';

export const CardSkeleton: FC = function CardSkeleton() {
  return <li className={styles.skeletonCard}></li>;
};
