import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_ALL_POSTS, GET_LOCAITONS_INFO, GET_CITIES, CREATE_SUPPORT_TASK, GET_ALL_USER_TASKS, GET_APP_INFO, GET_NEW_POSTS, GET_PAGES_NUMBER, GET_POST_COMMENTS, CREATE_POST_COMMENT, FILTER_POSTS, GET_FAVORITES, GET_COMPLAINS, SORT_POSTS } from "../actions/types";
import moment from 'moment'

const initialState = {
  postComments: [],
  loading: false,
  alert: null,
  categories: [],
  posts: [],
  newPosts: [],
  states: [],
  cities: [],
  supportTasks: [],
  affiliation: [],
  availability: [],
  available_to: [],
  ethnicity: [],
  eyes: [],
  hair: [],
  pagesNumber: 0,
  favorites: [],
  complains: []
};

export const appReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true }

    case HIDE_LOADER:
      return { ...state, loading: false }

    case SHOW_ALERT:
      return { ...state, alert: action.payload }

    case HIDE_ALERT:
      return { ...state, alert: null }

    case GET_ALL_POSTS:
      return { ...state, posts: action.payload }

    case SORT_POSTS:
      let newPosts = state.posts;
      if (action.payload === 'date/-') {
        newPosts.sort((a: any, b: any) => {
          const dateA = new Date(a.created_at.split('T')[0].split('-').join('/'));
          const dateB = new Date(b.created_at.split('T')[0].split('-').join('/'));
          if (dateA.getTime() < dateB.getTime()) {
            return a - b;
          } else if (dateA.getTime() > dateB.getTime()) {
            return b - a;
          } else return;
        });
      }
      return { ...state, posts: newPosts }

    case FILTER_POSTS:
      return { ...state, posts: action.payload }

    case GET_PAGES_NUMBER:
      return { ...state, pagesNumber: action.payload }

    case GET_NEW_POSTS:
      return { ...state, newPosts: action.payload }

    case GET_LOCAITONS_INFO:
      return { ...state, states: action.payload }

    case GET_CITIES:
      return { ...state, cities: action.payload }

    case GET_COMPLAINS:
      return { ...state, complains: action.payload }

    case GET_FAVORITES:
      return { ...state, favorites: action.payload }

    case CREATE_SUPPORT_TASK:
      return { ...state, supportTasks: [...state.supportTasks, action.payload] }

    case GET_ALL_USER_TASKS:
      return { ...state, supportTasks: action.payload }

    case GET_POST_COMMENTS:
      return { ...state, postComments: action.payload }

    case CREATE_POST_COMMENT:
      return { ...state, postComments: [...state.postComments, action.payload] }

    case GET_APP_INFO:
      return {
        ...state,
        categories: action.payload.categories,
        affiliation: action.payload.affiliation,
        availability: action.payload.availability,
        available_to: action.payload.available_to,
        ethnicity: action.payload.ethnicity,
        eyes: action.payload.eyes,
        hair: action.payload.hair
      }

    default: return state;
  }
}