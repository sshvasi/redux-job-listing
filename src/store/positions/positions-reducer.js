import { ADD_POSITIONS } from './positions-actions';

const positionsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_POSITIONS: {
      return action.positions;
    }
    default: {
      return state;
    }
  }
};

export { positionsReducer };
 