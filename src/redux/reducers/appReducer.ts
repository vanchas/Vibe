import { SHOW_LOADER, HIDE_LOADER, SHOW_ALERT, HIDE_ALERT, GET_ALL_POSTS, GET_LOCAITONS_INFO, GET_CITIES, CREATE_SUPPORT_TASK, GET_ALL_USER_TASKS, GET_APP_INFO, GET_NEW_POSTS, GET_PAGES_NUMBER, GET_POST_COMMENTS, CREATE_POST_COMMENT, FILTER_POSTS } from "../actions/types";

const initialState = {
  postComments: [],
  loading: false,
  alert: null,
  categories: [],
  posts: [],
  newPosts: [],
  states: [],
  cities: [],
  supportTasks: [
    { subject: 'Task 1 Subject', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.', id: 1 },
    { subject: 'Task 2 Subject', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.', id: 2 },
    { subject: 'Task 3 Subject', message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.', id: 3 }
  ],
  affiliation: [],
  availability: [],
  available_to: [],
  ethnicity: [],
  eyes: [],
  hair: [],
  pagesNumber: 0,
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