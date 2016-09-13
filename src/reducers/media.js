import Immutable from 'immutable';

import { SEARCH_MEDIA, REQUEST_DATA, RECEIVE_DATA, RECEIVE_ERROR } from '../constants/ActionTypes';

const INITIAL_STATE = Immutable.fromJS({
  isLoading: false,
  data: [],
  error: false,
  collection: {}
});

export default function media(state = INITIAL_STATE, action) {
  switch (action.type) {
    case RECEIVE_ERROR:
      return state.mergeDeep({isLoading: false, data: action.data, error: true});
    case RECEIVE_DATA:
      return state.merge({isLoading: false, error: false}).setIn(['data'], action.data);
    case REQUEST_DATA:
      return state.merge({isLoading: true, error: false, collection: action.collection});
    default:
      return state;
  }
}
