import Immutable from 'immutable';

import { SEARCH_COLLECTION, REQUEST_DATA, RECEIVE_DATA, RECEIVE_ERROR } from '../constants/ActionTypes';

const INITIAL_STATE = Immutable.fromJS({
  isLoading: false,
  data: [],
  error: false,
  collection: {}
});

export default function media(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH_COLLECTION:
      return state.mergeDeep({collection: action.collection});
    case RECEIVE_ERROR:
      return state.mergeDeep({isLoading: false, data: action.data, error: true});
    case RECEIVE_DATA:
      return state.mergeDeep({isLoading: false, data: action.data, error: false});
    case REQUEST_DATA:
      return state.merge({isLoading: true, error: false});
    default:
      return state;
  }
}
