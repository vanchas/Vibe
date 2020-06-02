import fetch from 'isomorphic-unfetch';
// import { takeEvery, put, call } from 'redux-saga/effects';
// import { REQUEST_POSTS, FETCH_POST } from '../actions/types';
// import { showLoader, hideLoader, showAlert } from '../actions/actions';

// export function* sagaWatcher() {
//   yield takeEvery(REQUEST_POSTS, sagaWorker)
// }

// function* sagaWorker() {
//   try {
//     yield put(showLoader());
//     const payload = yield call(fetchPosts);
//     yield put({ type: FETCH_POST, payload });
//     yield put(hideLoader());
//   } catch (e) {
//     yield put(showAlert('Something going wrong'));
//     yield put(hideLoader());
//   }
// }

// async function fetchPosts() {
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   return await response.json();
// }

// // export function* rootSaga () {
// //   yield [
// //       fork(sagaWatcher), // saga1 can also yield [ fork(actionOne), fork(actionTwo) ]
// //   ];
// // }
