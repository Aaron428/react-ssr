import {CHANGE_HOME_LIST} from './constants';

const defaultState = {
  name: 'george',
  newList: [],
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_HOME_LIST:
      return {
        ...state,
        newList: action.newList,
      };
    default:
      return state;
  }
};
