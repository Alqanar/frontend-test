import { createContext } from 'react';
import { INITIAL_STATE } from './constans';
import { IFilter } from './types';

interface IFilterContext {
  filter: IFilter;
  updateFilter: (filter: IFilter) => void;
  resetFilter: () => void;
  categoryItemTypes: Array<string>;
}

interface ISearchContext {
  search: string;
  updateSearch: (search: string) => void;
}

export const FilterContext = createContext<IFilterContext>({
  filter: { ...INITIAL_STATE.filter },
  updateFilter: a => a,
  resetFilter: () => 1,
  categoryItemTypes: [],
});

export const SearchContext = createContext<ISearchContext>({
  search: INITIAL_STATE.filter.search,
  updateSearch: a => a,
});
