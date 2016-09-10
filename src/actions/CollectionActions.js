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

export function searchCollection(collection) {
  return {
    type: types.SEARCH_COLLECTION,
    collection
  };
}

export function fetchData(url) {
  return function(dispatch) {
    dispatch(requestData());
    return fetchJsonp(url, {
      timeout: 10000
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      dispatch(receiveData(response.data));
    })
    .catch(function(response){
      dispatch(receiveError(response));
    });
  }
};

function requestData() {
  return {
    type: types.REQUEST_DATA
  }
};

function receiveData(data) {
  return{
    type: types.RECEIVE_DATA,
    data
  }
};

function receiveError(data) {
  return {
    type: types.RECEIVE_ERROR,
    data
  }
};
