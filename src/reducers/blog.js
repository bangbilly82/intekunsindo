import * as Actions from '../actions/Actions';

const initialState = {
  posts: null,
  post: null
};

function blog(state = initialState, action = null) {
  switch (action.type) {
    case Actions.GET_BLOG_CONTENT:
      return {
        ...state,
        posts: action.posts
      }
    case Actions.SET_BLOG_DETAIL:
      return {
        ...state,
        post: action.post
      }
    default:
      return state;
  }
}

export default blog;