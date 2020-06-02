import { SELECT_STATE, SELECT_CITY, SELECT_LIST_SORT, SELECT_LIST_FILTER, SELECT_CATEGORY } from "../actions/types";

const initialState = {
  posts: []
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SELECT_STATE:
      return { ...state, posts: action.payload }

    case SELECT_CITY:
      return { ...state, posts: action.payload }

    case SELECT_LIST_SORT:
      return { ...state, posts: action.payload }

    case SELECT_LIST_FILTER:
      return { ...state, posts: action.payload }

    case SELECT_CATEGORY:
      return { ...state, posts: action.payload }

    default:
      return state;
  }
}