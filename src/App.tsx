import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import { Header } from './components/Header/Header';
import { MainContent } from './components/MainContent/MainContent';
import { FilterContext } from './contexts';
import { useProductList } from './states/useGlobalState';

const categoryItemTypes: Set<string> = new Set();

export const App: FC = function App() {
  const { items, filter, status, updateFilter, resetFilter } = useProductList();
  const [categoryItemTypesArray, setCategoryItemTypesArray] = useState<Array<string>>([]);

  useEffect(() => {
    if (categoryItemTypes.size > 0) {
      return;
    }

    for (let i = 0; i < items.length; i++) {
      categoryItemTypes.add(items[i].categoryType);
    }

    setCategoryItemTypesArray(Array.from(categoryItemTypes));
  }, [items]);

  const handleSearchChange = useCallback((search: string) => updateFilter({ ...filter, search }), [
    updateFilter,
    filter,
  ]);

  const filterContextData = useMemo(
    () => ({ filter, updateFilter, resetFilter, categoryItemTypes: categoryItemTypesArray }),
    [filter, updateFilter, resetFilter, categoryItemTypesArray]
  );

  return (
    <>
      <Header title="Products" onChangeSearch={handleSearchChange} />

      <FilterContext.Provider value={filterContextData}>
        <MainContent items={items} status={status} />
      </FilterContext.Provider>
    </>
  );
};
