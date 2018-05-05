import blog from './blog';
import works from './works';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  blog,
  works
});

export default rootReducer;