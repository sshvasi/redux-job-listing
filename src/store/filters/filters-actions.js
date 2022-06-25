const ADD_FILTER = 'ADD_FILTER';
const REMOVE_FILTER = 'REMOVE_FILTER';
const CLEAR_FILTERS = 'CLEAR_FILTERS';

const addFilter = (filter) => ({ type: ADD_FILTER, filter });

const removeFilter = (filter) => ({ type: REMOVE_FILTER, filter });

const clearFilters = () => ({ type: CLEAR_FILTERS });

export {
  ADD_FILTER,
  REMOVE_FILTER,
  CLEAR_FILTERS,
  addFilter,
  removeFilter,
  clearFilters,
};
