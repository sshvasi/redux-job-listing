import { combineReducers } from 'redux';
import { positionsReducer } from './positions/positions-reducer';

const rootReducer = combineReducers({
  positions: positionsReducer,
});

export { rootReducer };
