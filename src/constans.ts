import { Status, IState } from './types';

export const STATUS = {
  isLimited: 'Limited',
  isNew: 'New',
};

export const INITIAL_STATE: IState = {
  filter: {
    isNew: false,
    category: [],
  },
  status: Status.IDLE,
  items: [],
};
