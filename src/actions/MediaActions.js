import fetchJsonp from 'fetch-jsonp';
import Immutable from 'immutable';

import * as types from '../constants/ActionTypes';
import { ENDPOINT, TOKEN } from '../constants/AppConstants';

export function getMedia(collection = {hashtag: 'nalcs2016', startDate: null, endDate: null}) {
  let url = `${ENDPOINT}${collection.hashtag}/media/recent?access_token=${TOKEN}`;

  return (dispatch, getStore) => {
    dispatch(requestData(collection));

    if (collection.startDate && collection.endDate) {
      return fetchDataBetweenDates(url, dispatch, collection);
    }

    return fetchData(url, dispatch);
  }
}

function fetchData(url, dispatch) {
  return fetchJsonp(url, {timeout: 10000})
  .then(response => response.json())
  .then(response => {
    dispatch(receiveData(response.data));
  })
  .catch(error => {
    dispatch(receiveError(error));
  });
}

function fetchDataBetweenDates(url, dispatch, collection) {
  const startTime = new Date(collection.startDate).getTime();
  const endTime = new Date(collection.endDate).getTime();
  let mediaData = [];

  function getData(url) {
    return fetchJsonp(url, {timeout: 10000})
    .then(response => response.json())
    .then(response => {
      let tempData = response.data.filter((val) => {
        let createdTime = parseInt(val.created_time) * 1000;

        return createdTime >= startTime && createdTime <= endTime;
      });

      mediaData = mediaData.concat(tempData);

      if (response.pagination.next_url) {
        getData(response.pagination.next_url);
      }
      else {
        dispatch(receiveData(mediaData));
      }
    })
    .catch(error => {
      dispatch(receiveError(error));
    });
  }

  getData(url);
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
