import { CLEAR_FILTERS, ADD_FILTER, REMOVE_FILTER } from './filters-actions';

const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (state.includes(action.filter)) return state;
      return [...state, action.filter];
    }
    case REMOVE_FILTER: {
      return state.filter((fil) => fil !== action.filter);
    }
    case CLEAR_FILTERS: {
      return [];
    }
    default: {
      return state;
    }
  }
};

export { filtersReducer };
