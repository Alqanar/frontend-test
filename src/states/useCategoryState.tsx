import { useCallback, useEffect, useState } from 'react';
import { Status, ICategoryItem } from '../types';

export const useCategoryState = (): [Array<ICategoryItem>, Status, () => void] => {
  const [categories, setCategories] = useState<Array<ICategoryItem>>([]);
  const [status, setStatus] = useState<Status>(Status.IDLE);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setStatus(Status.WORK);
    fetch('/api/category')
      .then(res => {
        if (!res.ok || res.status !== 200) {
          throw new Error(`Request failed with status code ${res.status}`);
        }
        return res.json();
      })
      .then(data => {
        setCategories(data);
        setStatus(Status.SUCCESS);
      })
      .catch(() => {
        setStatus(Status.ERROR);
      });
  }, [counter]);

  const retry = useCallback(() => setCounter(counter => counter + 1), []);

  return [categories, status, retry];
};
