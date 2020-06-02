import { TEST_CREATE_POST, TEST_FETCH_POST } from "../actions/types";

const initialState = {
  posts: [],
  fetchedPosts: []
};

export const testReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TEST_CREATE_POST:
      return { ...state, posts: state.posts.concat(action.payload) }

    case TEST_FETCH_POST:
      return { ...state, fetchedPosts: action.payload }

    default:
      return state;
  }
}