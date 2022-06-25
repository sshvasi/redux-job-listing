import { combineReducers } from 'redux';
import { filtersReducer } from './filters/filters-reducer';
import { positionsReducer } from './positions/positions-reducer';

const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filtersReducer,
});

export { rootReducer };
