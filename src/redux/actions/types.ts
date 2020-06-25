// test
export const TEST_CREATE_POST = 'CREATE_POST';
export const TEST_FETCH_POST = 'FETCH_POST';
export const TEST_REQUEST_POSTS = 'REQUEST_POSTS';

// app
export const SHOW_LOADER = 'APP/SHOW_LOADER';
export const HIDE_LOADER = 'APP/HIDE_LOADER';
export const SHOW_ALERT = 'APP/SHOW_ALERT';
export const HIDE_ALERT = 'APP/HIDE_ALERT'; 
export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_PAGES_NUMBER = 'GET_PAGES_NUMBER';
export const GET_NEW_POSTS = 'GET_NEW_POSTS';
export const GET_LOCAITONS_INFO = 'GET_LOCAITONS_INFO';
export const GET_CITIES = 'GET_CITIES';
export const CREATE_SUPPORT_TASK = 'CREATE_SUPPORT_TASK';
export const GET_ALL_USER_TASKS = 'GET_ALL_USER_TASKS';
export const GET_APP_INFO = 'GET_APP_INFO';
export const GET_POST_COMMENTS = 'GET_POST_COMMENTS';
export const CREATE_POST_COMMENT = 'CREATE_POST_COMMENT';
export const FILTER_POSTS = 'FILTER_POSTS';
export const REPORT_POST = 'REPORT_POST';
export const GET_FAVORITES = 'GET_FAVORITES';
export const GET_COMPLAINS = 'GET_GET_COMPLAINS';
export const SORT_POSTS = 'SORT_POSTS';

// provider
export const ADD_POST = 'PROVIDER/ADD_POST';
export const REMOVE_POST = 'PROVIDER/REMOVE_POST';
export const UPDATE_POST = 'PROVIDER/UPDATE_POST';

// provider
export interface ProviderPost {
  id: number | string,
  name: string,
  secondName: string,
  accountingName: string,
  sex: string,
  age: number | string,
  email: string,
  phone: number | string,
  ethnithity: string,
  hair: string,
  eyes: string,
  height: number | string,
  affiliation: string,
  availableTo: string,
  availability: string,
  shortSummary: string,
  about: string,
  photos: string[],
  videos: string[]
}

// user
export const SELECT_STATE = 'USER/SELECT_STATE';
export const SELECT_CITY = 'USER/SELECT_CITY';
export const SELECT_LIST_SORT = 'USER/SELECT_LIST_SORT';
export const SELECT_LIST_FILTER = 'USER/SELECT_LIST_FILTER';
export const SELECT_CATEGORY = 'USER/SELECT_CATEGORY';

// admin
export const GET_ALL_SUPPORT_TASKS = 'GET_ALL_SUPPORT_TASKS';
export const EDIT_SUPPORT_TASKS = 'EDIT_SUPPORT_TASKS';
export const DELETE_SUPPORT_TASK = 'DELETE_SUPPORT_TASK';
// export const CREATE_CATEGORY = 'CREATE_CATEGORY';
// export const EDIT_CATEGORY = 'EDIT_CATEGORY';
// export const DELETE_CATEGORY = 'DELETE_CATEGORY';
