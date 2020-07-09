import { ADD_POST, ProviderPost, UPDATE_POST, REMOVE_POST, GET_ALL_POSTS } from "./types"
import fetch from 'isomorphic-unfetch'
import { authenticationService } from "../../_services";
import {showAlert, showSuccess} from "./actions";
// import { useRouter } from "next/router"

export function getAllProviderPost(): any {
  return {
    type: GET_ALL_POSTS
  }
};

export const addProviderPost = (post: any) => async (dispatch: any) => {
  const user = authenticationService.currentUserValue;
  const formData = new FormData();
  formData.append('gender', post.gender);
  formData.append('age', post.age);
  formData.append('ethnicity_id', post.ethnicity_id);
  formData.append('hair_id', post.hair_id);
  formData.append('eye_id', post.eye_id);
  formData.append('height', post.height);
  formData.append('affiliation_id', post.affiliation_id);
  formData.append('availability_ids', post.availability_ids);
  formData.append('availableto_ids', post.availableto_ids);
  formData.append('number', post.number);
  formData.append('email', post.email);
  formData.append('model_name', post.model_name);
  post.photo.forEach((p: any) => {
    return formData.append('photo', p);
  });
  formData.append('video_link', post.video_link);
  formData.append('about', post.about);
  formData.append('summary', post.summary);
  formData.append('category_id', post.category_id);
  formData.append('state_id', post.state_id);
  formData.append('city_id', post.city_id);
  formData.append('second_name', post.second_name);
  formData.append('account_name', post.account_name);
  formData.append('photo_vertical', post.photo_vertical);
  formData.append('photo_horizontal', post.photo_horizontal);

  const response = await fetch('https://intim-vibe-api.padilo.pro/api/posts/create', {
    method: 'POST',
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Accept': 'application/json',
      'Authorization': `${user.token_type} ${user.token}`
    },
    body: formData
  });
  const promise = response.json();
  if (response.status === 201) {
    promise.then(data => {
      dispatch({ type: ADD_POST, payload: post });
      dispatch(showSuccess(data.message))
    }).catch(err => console.error('Error:', err))
  } else {
    promise.then(data => {
      dispatch(showAlert(data.message));
    }).catch(err => console.error('Error:', err))
  }
};
export function updateProviderPost(post: ProviderPost): any {
  return {
    type: UPDATE_POST,
    payload: post
  }
};
export function removeProviderPost(id: number | string): any {
  return {
    type: REMOVE_POST,
    payload: id
  }
};


