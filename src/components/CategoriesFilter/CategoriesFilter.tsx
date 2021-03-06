import React, { FC, useCallback, useContext, ChangeEvent } from 'react';
import { ICategoryItem, Status, IFilter } from '../../types';
import { CheckboxButton } from '../CheckboxButton/CheckboxButton';
import styles from './CategoriesFilter.module.scss';
import { FilterContext } from '../../contexts';
import { useCategoryState } from '../../states/useCategoryState';

interface ICategoryListParams {
  items: Array<ICategoryItem>;
  status: Status;
  filter: IFilter;
  categoryItemTypes: Array<string>;
  reload: () => void;
  resetCategoryFilter: (event: ChangeEvent<HTMLInputElement>) => void;
  onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SCELETONS_COUNT = 6;

const getCategoryList = ({
  items,
  status,
  filter,
  categoryItemTypes,
  reload,
  resetCategoryFilter,
  onCheckboxChange,
}: ICategoryListParams) => {
  if (status === Status.ERROR) {
    return (
      <button className={styles.reloadButton} onClick={reload}>
        Loading error. Try again
      </button>
    );
  }

  const listItems: React.ReactNode[] = [];

  if (status === Status.WORK) {
    for (let i = 0; i < SCELETONS_COUNT; i++) {
      listItems.push(<li className={styles.skeletonCategory} key={i}></li>);
    }
  } else if (status === Status.SUCCESS) {
    listItems.push(
      <li className={styles.categoryFilterItem} key="all">
        <CheckboxButton
          name="All"
          id="all"
          isChecked={!Boolean(filter.category.length) && !filter.isLimited && !filter.isNew}
          onClick={resetCategoryFilter}
        />
      </li>
    );

    for (let i = 0; i < items.length; i++) {
      const item = items[i];

      listItems.push(
        <li className={styles.categoryFilterItem} key={item.id}>
          <CheckboxButton
            name={item.name}
            id={item.id}
            isChecked={filter.category.includes(item.id)}
            isDisabled={!categoryItemTypes.includes(item.type)}
            onClick={onCheckboxChange}
          />
        </li>
      );
    }
  }

  return <ul className={styles.list}>{listItems}</ul>;
};

export const CategoriesFilter: FC = function CategoriesFilter() {
  const { filter, updateFilter, resetFilter, categoryItemTypes } = useContext(FilterContext);
  const [categories, requestStatus, reload] = useCategoryState();

  const handleChangeInput = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      if (filter.category.includes(event.target.id)) {
        updateFilter({
          ...filter,
          category: filter.category.filter(item => item !== event.target.id),
        });

        return;
      }

      updateFilter({
        ...filter,
        category: [...filter.category, event.target.id],
      });
    },
    [filter, updateFilter]
  );

  const resetCategoryFilter = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      resetFilter();
    },
    [resetFilter]
  );

  return (
    <section className={styles.categories}>
      <h3>Category</h3>
      {categories &&
        getCategoryList({
          items: categories,
          status: requestStatus,
          filter,
          categoryItemTypes,
          reload,
          resetCategoryFilter,
          onCheckboxChange: handleChangeInput,
        })}
    </section>
  );
};
