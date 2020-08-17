import { handleActions } from 'redux-actions';
import { getBlogPosts } from '../actions/blogPosts';

export const blogPostsReducer = handleActions(
  {
    [getBlogPosts]: (state: any, action: any) => ({
      posts: state.modal = action.payload
    }),
  },
  { posts: [ 1, 2, 3, 5, ] }
);
