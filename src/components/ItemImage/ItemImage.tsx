import React, { FC } from 'react';
import barleyJpg from '../../asset/images/barley.jpg';
import barleyWebp from '../../asset/images/barley.webp';
import barley2xJpg from '../../asset/images/barley@2x.jpg';
import barley2xWebp from '../../asset/images/barley@2x.webp';
import canolaJpg from '../../asset/images/canola.jpg';
import canolaWebp from '../../asset/images/canola.webp';
import canola2xJpg from '../../asset/images/canola@2x.jpg';
import canola2xWebp from '../../asset/images/canola@2x.webp';
import cornJpg from '../../asset/images/corn.jpg';
import cornWebp from '../../asset/images/corn.webp';
import corn2xJpg from '../../asset/images/corn@2x.jpg';
import corn2xWebp from '../../asset/images/corn@2x.webp';
import oatsJpg from '../../asset/images/oats.jpg';
import oatsWebp from '../../asset/images/oats.webp';
import oats2xJpg from '../../asset/images/oats@2x.jpg';
import oats2xWebp from '../../asset/images/oats@2x.webp';
import soybeansJpg from '../../asset/images/soybeans.jpg';
import soybeansWebp from '../../asset/images/soybeans.webp';
import soybeans2xJpg from '../../asset/images/soybeans@2x.jpg';
import soybeans2xWebp from '../../asset/images/soybeans@2x.webp';
import wheatJpg from '../../asset/images/wheat.jpg';
import wheatWebp from '../../asset/images/wheat.webp';
import wheat2xJpg from '../../asset/images/wheat@2x.jpg';
import wheat2xWebp from '../../asset/images/wheat@2x.webp';
import { CategoryType } from '../../types';
import styles from './ItemImage.module.scss';

interface IPoster {
  jpg: string;
  jpg2x: string;
  webp: string;
  webp2x: string;
}

const POSTERS: Record<CategoryType, IPoster> = {
  barley: {
    jpg: barleyJpg,
    jpg2x: barley2xJpg,
    webp: barleyWebp,
    webp2x: barley2xWebp,
  },
  canola: {
    jpg: canolaJpg,
    jpg2x: canola2xJpg,
    webp: canolaWebp,
    webp2x: canola2xWebp,
  },
  corn: {
    jpg: cornJpg,
    jpg2x: corn2xJpg,
    webp: cornWebp,
    webp2x: corn2xWebp,
  },
  oats: {
    jpg: oatsJpg,
    jpg2x: oats2xJpg,
    webp: oatsWebp,
    webp2x: oats2xWebp,
  },
  soybeans: {
    jpg: soybeansJpg,
    jpg2x: soybeans2xJpg,
    webp: soybeansWebp,
    webp2x: soybeans2xWebp,
  },
  wheat: {
    jpg: wheatJpg,
    jpg2x: wheat2xJpg,
    webp: wheatWebp,
    webp2x: wheat2xWebp,
  },
};

interface IItemImageProps {
  type: CategoryType;
}

export const ItemImage: FC<IItemImageProps> = function ItemImage({ type }) {
  return (
    <picture>
      <img className={styles.image} src={POSTERS[type].jpg} alt={`image of the ${type} product type`} />
    </picture>
  );
};
