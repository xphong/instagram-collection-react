import Immutable from 'immutable';

import { ADD_COLLECTION, DELETE_COLLECTION } from '../constants/ActionTypes';

const INITIAL_STATE = Immutable.List([
  {
    hashtag: '#cats',
    startDate: '2016-01-01',
    endDate: '2016-12-31'
  }
]);

export default function collections(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD_COLLECTION:
    return state.unshift(action.collection);
    case DELETE_COLLECTION:
      return state.filter((collection, index) => index !== action.index);
    default:
      return state;
  }
}
