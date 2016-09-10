import { combineReducers } from 'redux';

import collections from './collections';
import media from './media';

const rootReducer = combineReducers({
  collections,
  media
});

export default rootReducer;
