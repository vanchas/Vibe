import { SELECT_STATE, SELECT_CITY, SELECT_LIST_SORT, SELECT_LIST_FILTER, SELECT_CATEGORY, ALL_POSTS } from './types'
import fetch from 'isomorphic-unfetch';

export async function allPosts() {
  const response = await fetch('https://intim-vibe-api.padilo.pro/api/posts');
  console.log(response.json());
  return {
    type: ALL_POSTS
  }
}

export function selectState(state: string) {
  return {
    type: SELECT_STATE,
    payload: state
  }
}
export function selectCity(city: string) {
  return {
    type: SELECT_CITY,
    payload: city
  }
}
export function selectListSort(sort: string) {
  return {
    type: SELECT_LIST_SORT,
    payload: sort
  }
}
export function selectListFilter(filter: string) {
  return {
    type: SELECT_LIST_FILTER,
    payload: filter
  }
}
export function selectCategory(category: string) {
  return {
    type: SELECT_CATEGORY,
    payload: category
  }
}
