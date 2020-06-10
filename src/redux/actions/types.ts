// test
export const TEST_CREATE_POST = 'CREATE_POST';
export const TEST_FETCH_POST = 'FETCH_POST';
export const TEST_REQUEST_POSTS = 'REQUEST_POSTS';

// app
export const SHOW_LOADER = 'APP/SHOW_LOADER';
export const HIDE_LOADER = 'APP/HIDE_LOADER';
export const SHOW_ALERT = 'APP/SHOW_ALERT';
export const HIDE_ALERT = 'APP/HIDE_ALERT'; 
export const GET_CATEGORIES = 'APP/GET_CATEGORIES';

// provider
export const GET_ALL_POSTS = 'PROVIDER/GET_ALL_POSTS';
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
export const ALL_POSTS = 'USER/ALL_POSTS';
