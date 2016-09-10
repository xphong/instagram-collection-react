import Immutable from 'immutable';

import { ADD_COLLECTION, DELETE_COLLECTION } from '../constants/ActionTypes';

const INITIAL_STATE = Immutable.List([
  {
    hashtag: 'cats',
    startDate: null,
    endDate: null
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
