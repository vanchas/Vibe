import { GET_ALL_SUPPORT_TASKS, DELETE_SUPPORT_TASK, GET_APP_INFO } from "./types"
import fetch from 'isomorphic-unfetch'
import { authenticationService } from "../../_services"

export const getAllSupportTasks = () => async (dispatch: any) => {
  const user = authenticationService.currentUserValue;
  const response = await fetch(`https://intim-vibe-api.padilo.pro/api/admin/support`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  const promise = response.json();
  promise.then(res => {
    return dispatch({ type: GET_ALL_SUPPORT_TASKS, payload: res.data })
  }).catch(err => console.error('Error: ', err));
}
export const editSupportTasks = (data: any) => async (dispatch: any) => {
  const user = authenticationService.currentUserValue;
  const response = await fetch(`https://intim-vibe-api.padilo.pro/api/admin/support/edit/${data.id}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: JSON.stringify({
      subject: data.subject,
      message: data.message,
      answer: data.answer
    })
  });
  const promise = response.json();
  promise.then(res => {
    return dispatch({ type: GET_ALL_SUPPORT_TASKS, payload: res })
  }).then(() => window.location.reload(true));
}
export const deleteSupportTask = (id: number | string) => async (dispatch: any) => {
  const user = authenticationService.currentUserValue;
  const response = await fetch(`https://intim-vibe-api.padilo.pro/api/admin/support/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  });
  dispatch({ type: DELETE_SUPPORT_TASK, payload: id })
  return response;
}
export const createCategory = (name: string) => async (dispatch: any) => {
  const user = authenticationService.currentUserValue;
  const response = await fetch(`https://intim-vibe-api.padilo.pro/api/admin/categories/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: JSON.stringify({ name })
  });
  const promise = response.json();
  promise.then(res => {
    return dispatch({ type: GET_APP_INFO })
  });
}
export const editCategory = (id: string | number, name: string) => async (dispatch: any) => {
  const user = await authenticationService.currentUserValue;
  return await fetch(`https://intim-vibe-api.padilo.pro/api/admin/categories/${id}/edit`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: JSON.stringify({ name })
  }).then(() => {
    dispatch({ type: GET_APP_INFO });
  }).catch(err => console.error('Error: ', err));;
}
export const deleteCategory = (id: string | number) => async (dispatch: any) => {
  const user = await authenticationService.currentUserValue;
  return await fetch(`https://intim-vibe-api.padilo.pro/api/admin/categories/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Authorization': `${user.token_type} ${user.token}`
    }
  }).then(() => {
    dispatch({ type: GET_APP_INFO });
  }).catch(err => console.error('Error: ', err));
}
