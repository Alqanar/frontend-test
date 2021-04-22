import React, { FC, useCallback, ChangeEvent, useState, useMemo } from 'react';
import styles from './Search.module.scss';
import debounce from 'lodash.debounce';

const DEBOUNCE_TIMEOUT = 500;

interface ISearchProps {
  onChange: (value: string) => void;
}

export const Search: FC<ISearchProps> = function Search({ onChange }) {
  const [innerValue, setInnerValue] = useState('');

  const debouncedChange = useMemo(() => debounce(onChange, DEBOUNCE_TIMEOUT), [onChange]);

  const onChangeField = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      event.preventDefault();

      const value = event.target.value;

      setInnerValue(value);
      debouncedChange(value);
    },
    [setInnerValue, debouncedChange]
  );

  return (
    <>
      <input
        className={styles.search}
        type="search"
        id="site-search"
        name="search"
        placeholder="Search among products"
        value={innerValue}
        onChange={onChangeField}
        aria-label="Search through site content"
      />
    </>
  );
};
