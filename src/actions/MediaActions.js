import fetchJsonp from 'fetch-jsonp';

import * as types from '../constants/ActionTypes';
import { ENDPOINT, TOKEN } from '../constants/AppConstants';

export function fetchData(collection) {
  let url = `${ENDPOINT}${collection.hashtag}/media/recent?access_token=${TOKEN}`;

  return (dispatch, getStore) => {
    dispatch(requestData(collection));
    return fetchJsonp(url, {timeout: 10000})
    .then(response => response.json())
    .then(response => {
      dispatch(receiveData(response.data));
    })
    .catch(error => {
      dispatch(receiveError(error));
    });
  }
}

function requestData(collection) {
  return {
    type: types.REQUEST_DATA,
    collection
  }
}

function receiveData(data) {
  return{
    type: types.RECEIVE_DATA,
    data
  }
}

function receiveError(data) {
  return {
    type: types.RECEIVE_ERROR,
    data
  }
}
