import fetchJsonp from 'fetch-jsonp';
import Immutable from 'immutable';

import * as types from '../constants/ActionTypes';
import { ENDPOINT, TOKEN } from '../constants/AppConstants';
import { parseDate } from '../utils/utils';

export function getMedia(collection = {hashtag: 'nalcs2016', startDate: null, endDate: null}) {
  const isDateSpecified = collection.startDate && collection.endDate;
  let url = `${ENDPOINT}${collection.hashtag}/media/recent?access_token=${TOKEN}`;

  return (dispatch, getStore) => {
    dispatch(requestData(collection));

    if (isDateSpecified) {
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
  const fullDayInMs = 86400000;
  const startTime = parseDate(collection.startDate).getTime();
  const endTime = parseDate(collection.endDate).getTime() + fullDayInMs;
  let mediaItems = [];

  function getDataBetweenDatesRecursive(url) {
    return fetchJsonp(url, {timeout: 10000})
    .then(response => response.json())
    .then(response => {
      let continueRecursion = true;

      let itemsWithinDateRange = response.data.filter((item) => {
        let createdTime = parseInt(item.created_time) * 1000;

        if (startTime >= createdTime) {
          continueRecursion = false;
          return;
        }

        return createdTime >= startTime && createdTime <= endTime;
      });

      mediaItems = mediaItems.concat(itemsWithinDateRange);

      if (response.pagination.next_url && continueRecursion) {
        getDataBetweenDatesRecursive(response.pagination.next_url);
      }
      else {
        if (mediaItems.length > 0) {
          dispatch(receiveData(mediaItems));
        }
        else {
          dispatch(receiveError([]));
        }
      }
    })
    .catch(error => {
      dispatch(receiveError(error));
    });
  }

  getDataBetweenDatesRecursive(url);
}

function requestData(collection) {
  return {
    type: types.REQUEST_DATA,
    collection
  };
}

function receiveData(data) {
  return{
    type: types.RECEIVE_DATA,
    data
  };
}

function receiveError(data) {
  return {
    type: types.RECEIVE_ERROR,
    data
  };
}
