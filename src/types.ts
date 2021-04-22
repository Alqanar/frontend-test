export interface IItem {
  categoryId: string;
  categoryName: string;
  categoryType: CategoryType;
  description: string;
  discount: number | null;
  id: string;
  isLimited: boolean;
  isNew: boolean;
  name: string;
  price: number;
}

export type CategoryType = 'barley' | 'canola' | 'corn' | 'oats' | 'soybeans' | 'wheat';

export interface ICategoryItem {
  id: 'string';
  name: 'string';
  type: 'string';
}

export interface IFilter {
  isNew: boolean;
  isLimited: boolean;
  category: Array<string>;
  search: string;
}

export enum Status {
  IDLE = 'idle',
  WORK = 'work',
  SUCCESS = 'success',
  ERROR = 'error',
}

export interface IState {
  filter: IFilter;
  status: Status;
  items: Array<IItem>;
}
