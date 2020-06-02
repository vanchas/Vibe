import { ADD_POST, REMOVE_POST, UPDATE_POST } from "../actions/types";

const initialState = {
  providerPosts: []
};

export const providerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, providerPosts: state.providerPosts.concat(action.payload) }

    case REMOVE_POST:
      return { ...state, providerPosts: action.payload }

    case UPDATE_POST:
      return { ...state, providerPosts: action.payload }

    default:
      return state;
  }
}