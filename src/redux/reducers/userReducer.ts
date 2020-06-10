import { SELECT_STATE, SELECT_CITY, SELECT_LIST_SORT, SELECT_LIST_FILTER, SELECT_CATEGORY, ALL_POSTS, GET_CATEGORIES } from "../actions/types";

const initialState = {
  posts: [],
  categories: []
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case ALL_POSTS:
      return { ...state, posts: action.payload }

    case GET_CATEGORIES:
      return { ...state, categories: action.payload }

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