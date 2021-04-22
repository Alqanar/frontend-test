import { Status, IState } from './types';

export const STATUS = {
  isLimited: 'Limited',
  isNew: 'New',
};

export const INITIAL_STATE: IState = {
  filter: {
    isNew: false,
    isLimited: false,
    category: [],
    search: '',
  },
  status: Status.IDLE,
  items: [],
};
