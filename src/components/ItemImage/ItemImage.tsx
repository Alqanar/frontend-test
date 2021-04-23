import React, { FC } from 'react';
import barleyWebp from '../../asset/images/barley.webp';
import barley2xWebp from '../../asset/images/barley@2x.webp';
import canolaWebp from '../../asset/images/canola.webp';
import canola2xWebp from '../../asset/images/canola@2x.webp';
import cornWebp from '../../asset/images/corn.webp';
import corn2xWebp from '../../asset/images/corn@2x.webp';
import oatsWebp from '../../asset/images/oats.webp';
import oats2xWebp from '../../asset/images/oats@2x.webp';
import soybeansWebp from '../../asset/images/soybeans.webp';
import soybeans2xWebp from '../../asset/images/soybeans@2x.webp';
import wheatWebp from '../../asset/images/wheat.webp';
import wheat2xWebp from '../../asset/images/wheat@2x.webp';
import { CategoryType } from '../../types';
import styles from './ItemImage.module.scss';

interface IPoster {
  webp: string;
  webp2x: string;
}

const POSTERS: Record<CategoryType, IPoster> = {
  barley: {
    webp: barleyWebp,
    webp2x: barley2xWebp,
  },
  canola: {
    webp: canolaWebp,
    webp2x: canola2xWebp,
  },
  corn: {
    webp: cornWebp,
    webp2x: corn2xWebp,
  },
  oats: {
    webp: oatsWebp,
    webp2x: oats2xWebp,
  },
  soybeans: {
    webp: soybeansWebp,
    webp2x: soybeans2xWebp,
  },
  wheat: {
    webp: wheatWebp,
    webp2x: wheat2xWebp,
  },
};

interface IItemImageProps {
  type: CategoryType;
}

export const ItemImage: FC<IItemImageProps> = function ItemImage({ type }) {
  return (
    <img
      className={styles.image}
      src={POSTERS[type].webp}
      srcSet={`${POSTERS[type].webp2x} 2x`}
      alt={`image of the ${type} product type`}
    />
  );
};
