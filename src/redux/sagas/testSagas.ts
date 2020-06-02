import fetch from 'isomorphic-unfetch';
import { takeEvery, put, call } from 'redux-saga/effects';
import { TEST_REQUEST_POSTS, TEST_FETCH_POST } from '../actions/types';
import { showLoader, hideLoader, showAlert } from '../actions/actions';


export function* sagaWatcher() {
  yield takeEvery(TEST_REQUEST_POSTS, sagaWorker)
}

function* sagaWorker() {
  try {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: TEST_FETCH_POST, payload });
    yield put(hideLoader());
  } catch (e) {
    yield put(showAlert('Something going wrong'));
    yield put(hideLoader());
  }
}

async function fetchPosts() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return await response.json();
}