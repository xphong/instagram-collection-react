import fetchJsonp from 'fetch-jsonp';

import * as types from '../constants/ActionTypes';
import { ENDPOINT, TOKEN } from '../constants/AppConstants';

export function fetchData(collection) {
  let url = `${ENDPOINT}${collection.hashtag}/media/recent?access_token=${TOKEN}`;

  return function(dispatch) {
    dispatch(requestData(collection));
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

function requestData(collection) {
  return {
    type: types.REQUEST_DATA,
    collection
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
