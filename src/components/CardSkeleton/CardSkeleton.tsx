import React, { FC } from 'react';
import styles from './CardSkeleton.module.scss';

export const CardSkeleton: FC = function CardSkeleton() {
  return <div className={styles.skeletonCard}></div>;
};
