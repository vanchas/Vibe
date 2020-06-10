import fetch from 'isomorphic-unfetch';
import { takeEvery, put, call } from 'redux-saga/effects';
import { REQUEST_POSTS, FETCH_POST, ALL_POSTS } from '../actions/types';
import { showLoader, hideLoader, showAlert } from '../actions/actions';

export function* userSagaWatcher() {
  // console.log('userSagaWatcher');
  
  yield takeEvery(ALL_POSTS, sagaWorker)
}

function* sagaWorker() {
  // console.log('sagaWorker');

  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: ALL_POSTS, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert('Something going wrong'));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  // console.log('fetchPosts');

  const response = await fetch('https://intim-vibe-api.padilo.pro/api/posts');
  return await console.log(response.json());
}
