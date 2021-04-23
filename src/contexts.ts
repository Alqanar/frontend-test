import { createContext } from 'react';
import { INITIAL_STATE } from './constans';
import { IFilter } from './types';

interface IFilterContext {
  filter: IFilter;
  updateFilter: (filter: IFilter) => void;
  resetFilter: () => void;
  categoryItemTypes: Array<string>;
}

export const FilterContext = createContext<IFilterContext>({
  filter: { ...INITIAL_STATE.filter },
  updateFilter: a => a,
  resetFilter: () => 1,
  categoryItemTypes: [],
});
