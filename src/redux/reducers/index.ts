import { combineReducers } from 'redux';
import { blogPostsReducer } from './blogPostsReducer';

export const rootReducer = combineReducers({
  blogPostsReducer,
});
