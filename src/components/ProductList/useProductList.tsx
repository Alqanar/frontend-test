import { useCallback, useEffect, useReducer } from 'react';

import { IItem } from '../../types';

export interface IFilter {
  isNew: boolean;
  category: Array<string>;
}

enum Status {
  IDLE = 'idle',
  WORK = 'work',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface IReducerState {
  filter: IFilter;
  status: Status;
  items: Array<IItem>;
}

enum ActionKind {
  FILTER_CHANGE = 'filter:change',
  FILTER_RESET = 'filter:reset',
  REQUEST_START = 'request:start',
  REQUEST_SUCCESS = 'request:success',
  REQUEST_ERROR = 'request:error',
}

interface IFilterChangeAction {
  type: ActionKind.FILTER_CHANGE;
  payload: IFilter;
}

interface IFilterResetAction {
  type: ActionKind.FILTER_RESET;
  payload?: unknown;
}

interface IRequestStartAction {
  type: ActionKind.REQUEST_START;
  payload?: unknown;
}

interface IRequestSuccessAction {
  type: ActionKind.REQUEST_SUCCESS;
  payload: Array<IItem>;
}

interface IRequestErrorAction {
  type: ActionKind.REQUEST_ERROR;
  payload?: unknown;
}

type Action =
  | IFilterChangeAction
  | IFilterResetAction
  | IRequestStartAction
  | IRequestSuccessAction
  | IRequestErrorAction;

const initialState = {
  filter: {
    isNew: false,
    category: [],
  },
  status: Status.IDLE, // idle | work | success | error
  items: [],
};

const reducer = (state: IReducerState, action: Action): IReducerState => {
  console.log(`Action: ${action.type}; Payload:`, action.payload);

  switch (action.type) {
    case ActionKind.FILTER_CHANGE: {
      return {
        ...state,
        status: Status.WORK,
        filter: {
          ...state.filter,
          ...action.payload,
        },
      };
    }
    case ActionKind.FILTER_RESET: {
      return {
        ...state,
        status: Status.WORK,
        filter: {
          ...initialState.filter,
        },
      };
    }
    case ActionKind.REQUEST_START: {
      return {
        ...state,
        status: Status.WORK,
      };
    }
    case ActionKind.REQUEST_SUCCESS: {
      return {
        ...state,
        status: Status.SUCCESS,
        items: action.payload,
      };
    }
    case ActionKind.REQUEST_ERROR: {
      return {
        ...state,
        status: Status.ERROR,
      };
    }
  }
};

export const useProductList = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateFilter = useCallback((filter = {}) => dispatch({ type: ActionKind.FILTER_CHANGE, payload: filter }), []);

  const resetFilter = useCallback(() => dispatch({ type: ActionKind.FILTER_RESET }), []);

  const performRequest = useCallback(() => {
    dispatch({ type: ActionKind.REQUEST_START });
    // prettier-ignore
    const serializeFilter = (filter: IFilter) => [
      ...filter.category.map(categoryId => `category[]=${categoryId}`),
      `isNew=${filter.isNew}`,
    ].join('&')

    fetch(`/api/product?${serializeFilter(state.filter)}`)
      .then(res => {
        if (!res.ok || res.status !== 200) {
          throw new Error(`Request failed with status code ${res.status}`);
        }
        return res.json();
      })
      .then(data => dispatch({ type: ActionKind.REQUEST_SUCCESS, payload: data.results }))
      .catch(err => {
        console.error(err);
        dispatch({ type: ActionKind.REQUEST_ERROR });
      });
  }, [state.filter]);

  useEffect(() => {
    performRequest();
  }, [performRequest]);

  return {
    ...state,
    updateFilter,
    resetFilter,
  };
};
