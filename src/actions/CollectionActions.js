import { ADD_COLLECTION, DELETE_COLLECTION } from '../constants/ActionTypes';

export function addCollection(collection) {
  return {
    type: ADD_COLLECTION,
    collection
  };
}

export function deleteCollection(index) {
  return {
    type: DELETE_COLLECTION,
    index
  };
}

export function addAsync() {
  return dispatch => {
    setTimeout(() => {
      dispatch(addCollection());
    }, 1000);
  };
}
