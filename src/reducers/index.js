import { combineReducers } from 'redux';
import blogs from './blogs';
import filter from './filter';
import nextId from './nextId';

const rootReducer = combineReducers({
  blogs,
  filter,
  nextId,
});

export default rootReducer;