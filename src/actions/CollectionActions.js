import fetchJsonp from 'fetch-jsonp';

import * as types from '../constants/ActionTypes';

export function addCollection(collection) {
  return {
    type: types.ADD_COLLECTION,
    collection
  };
}

export function deleteCollection(index) {
  return {
    type: types.DELETE_COLLECTION,
    index
  };
}
